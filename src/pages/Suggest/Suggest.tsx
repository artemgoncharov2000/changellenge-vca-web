import React, {FC, useState} from "react";
import './Suggest.scss';
import NavBar from "./NavBar/NavBar";
import Vacancy from "./Vacancy/Vacancy";
import Event from "./Event/Event";
import Course from "./Course/Course";
import Article from "./Article/Article";
const testNames = ['Вакансии', 'Мероприятия', 'Курсы', 'Полезные статьи'];
const Suggest: FC = () => {

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

    const getCurrentTab = () => {
        switch (activeTabLabel){
            case 'Вакансии': {
                return <Vacancy />;
            }
            case 'Мероприятия': {
                return <Event/>;
            }
            case 'Курсы': {
                return <Course />;
            }
            case 'Полезные статьи':
                return <Article />;
        }

    }

    return (
        <div className={'suggest-page'}>
            <div className={'suggest-page-heading'}>
                <span className={'suggest-page-heading__title'}>{"Результаты"}</span>
            </div>
            <div className={'suggest-page-main'}>
                <NavBar activeSectionLabel={activeTabLabel} sectionLabels={testNames} nextSectionByName={nextTabByName} />
                <div className={'suggest-page-main__content'}>
                    {getCurrentTab()}
                </div>
            </div>
        </div>
    )
}

export default Suggest;