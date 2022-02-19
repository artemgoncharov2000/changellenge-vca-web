import React, {useState} from "react";
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

const testNames = ['Базовая информация', 'Образование'];
const Form = () => {
    const navigate = useNavigate();
    const formData = useFetchForm();
    const [activeTabLabel, setActiveTabLabel] = useState<string>(testNames[0]);
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

    const nextTabByName = (label: string) => {
        const currentIndex = testNames.indexOf(label)
        setActiveTabIndex(currentIndex);
        setActiveTabLabel(label);
    }

    const nextTab = () => {
        const currentIndex = activeTabIndex + 1;
        setActiveTabIndex(currentIndex);
        setActiveTabLabel(testNames[currentIndex]);
    }

    const prevTab = () => {
        const currentIndex = activeTabIndex - 1;
        setActiveTabIndex(currentIndex);
        setActiveTabLabel(testNames[currentIndex]);
    }

    const submitForm = (values: any, actions: FormikHelpers<any>) => {
        const preparedValues = prepareFormValues(values);
        navigate('/feedback');
    }

    if (!formData) {
        return null;
    }

    return (
        <div className={'form-page'}>
            <div className={'form-page-heading'}>
                <span className={'form-page-heading__title'}>{"Анкета"}</span>
            </div>
            <div className={'form-page-content'}>
                <Formik
                    initialValues={getInitialValues(formData)}
                    onSubmit={submitForm}
                >
                    {
                        () => {

                            return (
                                <FormikForm>
                                    <NavBar
                                        sectionLabels={testNames}
                                        activeSectionLabel={activeTabLabel}
                                        nextSectionByName={nextTabByName}
                                    />

                                    {
                                        map(formData, (block, index) => {
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
                                                    maxIndex={testNames.length - 1}
                                                >
                                                    <Block
                                                        blockData={block}
                                                        key={block.id}
                                                        goNext={nextTab}
                                                        goBack={prevTab}
                                                        isLast={index === formData?.length - 1}
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