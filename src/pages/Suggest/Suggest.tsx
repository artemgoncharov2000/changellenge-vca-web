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
            <NavBar activeSectionLabel={activeTabLabel} sectionLabels={testNames} nextSectionByName={nextTabByName} />
            <div className={'suggest-page__content'}>
                {getCurrentTab()}
            </div>
        </div>
    )
}

export default Suggest;