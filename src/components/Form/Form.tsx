import React, { useState } from "react";
import { cn } from '@bem-react/classname';
import './Form.scss';
import NavBar from "./NavBar/NavBar";
import map from 'lodash/map';
import Tab from "./Tab/Tab";

const cnForm = cn('Form');

const testNames = ['Базовая информация', 'Образование', 'Опыт работы'];
const sections = [{label: "Базовая информация"}, {label: "Образование"}, {label: "Опыт работы"}];
const Form = () => {

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

  return (
    <div className={cnForm()}>
      <NavBar
        sectionLabels={testNames}
        activeSectionLabel={activeTabLabel}
        nextSectionByName={nextTabByName}
      />
      {
        map(sections, section => {
          if (section.label !== activeTabLabel) {
            return null;
          }

          return (
            <Tab
              data={section.label}
              nextSection={nextTab}
              prevSection={prevTab}
              currentIndex={activeTabIndex}
              maxIndex={testNames.length - 1}
            />)
        })
      }
    </div>
  )
}

export default Form;