import React, {useEffect, useState} from "react";
import {cn} from '@bem-react/classname';
import './Form.scss';
import NavBar from "./NavBar/NavBar";
import map from 'lodash/map';
import Tab from "./Tab/Tab";
import {Formik, Form as FormikForm, FormikHelpers} from 'formik';
import {getInitialValues, InitialValuesT} from "../../lib/get-initial-values";
import Block from "./Block/Block";
import {prepareFormValues} from "../../lib/prepare-form-values";
import {useNavigate} from "react-router-dom";
import useFetchForm from "../../hooks/use-fetch-form";
import api from "../../lib/api/api-client";
import { IFormApi } from "../../types/api";
import { IBlockData } from "../../types/form";


const Form = () => {
    const navigate = useNavigate();
    const data = useFetchForm();
    
    const [initialValues, setInitialValues] = useState<InitialValuesT>({});
    const [tabLabels, setTabLabels] = useState<Array<string>>([]);
    const [activeTabLabel, setActiveTabLabel] = useState<string>('');
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

    useEffect(() => {
        if (!data) {
            return;
        }

        const tabLabels = map(data?.blocks, block => block.name);
        setTabLabels(tabLabels);
        setActiveTabLabel(tabLabels[0]);
        const initialValues = getInitialValues(data?.blocks);
        setInitialValues(initialValues);
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

    const submitForm = (values: any, actions: FormikHelpers<any>) => {
        if (!data) {
            return;
        }
        const preparedValues = prepareFormValues(values);
        console.log('preparedValues', preparedValues);
        api.sendForm(data.sessionId, preparedValues)
            .then(() => {
                navigate('/feedback', {
                    state: {
                        sessionId: data.sessionId,
                    },
                });
            })
    }

    const updateInitialValues = (sessionId: number, data: {[elemId: number]: string}) => {
        const newInitialValues = {...initialValues};
        newInitialValues[sessionId].push(data);
        setInitialValues(newInitialValues);
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
                    initialValues={initialValues}
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
                                                        updateInitialValues={updateInitialValues}
                                                        blockData={block}
                                                        key={block.id}
                                                        goNext={nextTab}
                                                        goBack={prevTab}
                                                        isLast={index === data?.blocks?.length - 1}
                                                        activeTabIndex={activeTabIndex}
                                                        visible={block.name !== activeTabLabel}
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