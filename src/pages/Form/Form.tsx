import React, {useEffect, useState} from "react";
import {cn} from '@bem-react/classname';
import './Form.scss';
import NavBar from "./NavBar/NavBar";
import map from 'lodash/map';
import Tab from "./Tab/Tab";
import {Formik, Form as FormikForm, FormikHelpers} from 'formik';
import {getInitialValues} from "../../lib/get-initial-values";
import Block from "./Block/Block";
import {prepareFormValues} from "../../lib/prepare-form-values";
import {useNavigate} from "react-router-dom";
import useFetchForm from "../../hooks/use-fetch-form";
import api from "../../lib/api/api-client";
import { IFormApi } from "../../types/api";


const Form = () => {
    const navigate = useNavigate();
    const data = useFetchForm();
    
    const [tabLabels, setTabLabels] = useState<Array<string>>([]);
    const [activeTabLabel, setActiveTabLabel] = useState<string>('');
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

    useEffect(() => {
        const tabLabels = map(data?.blocks, block => block.name);
        setTabLabels(tabLabels);
        setActiveTabLabel(tabLabels[0]);
    }, [data])

    const nextTabByName = (label: string) => {
        const currentIndex = tabLabels.indexOf(label)
        setActiveTabIndex(currentIndex);
        setActiveTabLabel(label);
    }

    const nextTab = () => {
        const currentIndex = activeTabIndex + 1;
        setActiveTabIndex(currentIndex);
        setActiveTabLabel(tabLabels[currentIndex]);
    }

    const prevTab = () => {
        const currentIndex = activeTabIndex - 1;
        setActiveTabIndex(currentIndex);
        setActiveTabLabel(tabLabels[currentIndex]);
    }

    const submitForm = async (values: any, actions: FormikHelpers<any>) => {
        if (!data) {
            return;
        }
        const preparedValues = prepareFormValues(values);
        api.sendForm(data.sessionId, preparedValues);
        navigate('/feedback', {
            state: {
                sessionId: data.sessionId,
            },
        });
    }

    if (!data) {
        return null;
    }

    return (
        <div className={'form-page'}>
            <div className={'form-page-heading'}>
                <span className={'form-page-heading__title'}>{"Анкета"}</span>
            </div>
            <div className={'form-page-content'}>
                <Formik
                    initialValues={getInitialValues(data?.blocks)}
                    enableReinitialize
                    onSubmit={submitForm}
                >
                    {
                        () => {
                            return (
                                <FormikForm>
                                    <NavBar
                                        sectionLabels={tabLabels}
                                        activeSectionLabel={activeTabLabel}
                                        nextSectionByName={nextTabByName}
                                    />
                                    {
                                        map(data.blocks, (block, index) => {
                                            console.log('block.name: ', block.name);
                                            console.log('activeTabeLabel: ', activeTabLabel);
                                            
                                            if (block.name !== activeTabLabel) {
                                                return null;
                                            }
                                            return (
                                                <Tab
                                                    key={block.name}
                                                    data={block.name}
                                                    nextSection={nextTab}
                                                    prevSection={prevTab}
                                                    currentIndex={activeTabIndex}
                                                    maxIndex={tabLabels.length - 1}
                                                >
                                                    <Block
                                                        blockData={block}
                                                        key={block.id}
                                                        goNext={nextTab}
                                                        goBack={prevTab}
                                                        isLast={index === data?.blocks?.length - 1}
                                                        activeTabIndex={activeTabIndex}
                                                    />
                                                </Tab>
                                            )
                                        })
                                    }
                                </FormikForm>
                            )
                        }
                    }
                </Formik>
            </div>
        </div>
    )
}

export default Form;