import React, {useState} from "react";
import {cn} from '@bem-react/classname';
import './Form.scss';
import NavBar from "./NavBar/NavBar";
import map from 'lodash/map';
import Tab from "./Tab/Tab";
import {Formik, Form as FormikForm, FormikHelpers} from 'formik';
import {getInitialValues} from "../../lib/get-initial-values";
import Block from "./Block/Block";
import {ElementTypeT} from "./Element/types";
import {prepareFormValues} from "../../lib/prepare-form-values";
import {useNavigate} from "react-router-dom";

const cnForm = cn('Form');

const mock = {
    data: [
        {
            id: 123,
            name: "Базовая информация",
            sections: [
                {
                    id: 1234,
                    name: "Личные данные",
                    elements: [
                        {
                            id: 1,
                            title: "Имя",
                            type: "TEXT_INPUT" as ElementTypeT,
                        },
                        {
                            id: 2,
                            title: "Фамилия",
                            type: "TEXT_INPUT" as ElementTypeT,
                        },
                        {
                            id: 3,
                            title: "Отчество",
                            type: "TEXT_INPUT" as ElementTypeT,
                        }
                    ]
                },
                {
                    id: 12345,
                    name: "Место проживание",
                    elements: [
                        {
                            id: 11,
                            title: "Город",
                            type: "TEXT_INPUT" as ElementTypeT,
                        },
                        {
                            id: 12,
                            title: "Улица",
                            type: "TEXT_INPUT" as ElementTypeT,
                        },
                    ]
                }
            ]
        },
        {
            id: 1245,
            name: 'Образование',
            sections: [
                {
                    id: 1327676,
                    name: 'Учебное заведение',
                    elements: [
                        {
                            id: 4,
                            title: 'Тип учебного заведения',
                            options: [
                                'Среднеспециальное учебное заведение',
                                'Высшее учебное заведение',
                            ],
                            placeholder: 'Выберете тип учебного заведения',
                            type: "SELECTOR" as ElementTypeT,
                        },
                        {
                            id: 5,
                            title: 'Даты обучения',
                            type: "INTERVAL_DATE_PICKER" as ElementTypeT,
                        },
                        {
                            id: 6,
                            title: 'Название',
                            type: "TEXT_INPUT" as ElementTypeT,
                        },
                        {
                            id: 7,
                            title: 'Факультет',
                            type: "TEXT_INPUT" as ElementTypeT,
                        },
                        {
                            id: 8,
                            title: 'Специализация',
                            type: "TEXT_INPUT" as ElementTypeT,
                        },
                        {
                            id: 9,
                            title: 'Достижения в этом учебном заведении',
                            description: 'В этом поле, пожалуйста, укажите, если у вас есть красный диплом, именная стипендия или, например, вы победили на внутреннем конкурсе курсовых проектов.',
                            type: "TEXT_AREA" as ElementTypeT,
                        },
                    ]
                }
            ]
        }
    ]
}

const testNames = ['Базовая информация', 'Образование'];
const Form = () => {
    const navigate = useNavigate();
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
        console.log('Data to send', preparedValues);
        navigate('/feedback');
    }

    return (
        <div className={cnForm()}>
            <Formik
                initialValues={getInitialValues(mock.data)}
                onSubmit={submitForm}
            >
                {
                    props => {

                        return (
                            <FormikForm>
                                <NavBar
                                    sectionLabels={testNames}
                                    activeSectionLabel={activeTabLabel}
                                    nextSectionByName={nextTabByName}
                                />

                                {
                                    map(mock.data, (block, index) => {
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
                                                    {...block}
                                                    key={block.id}
                                                    goNext={nextTab}
                                                    goBack={prevTab}
                                                    isLast={index === mock.data.length - 1}
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
    )
}

export default Form;