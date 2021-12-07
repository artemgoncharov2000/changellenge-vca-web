import React, { useState } from "react";
import { cn } from '@bem-react/classname';
import './Form.scss';
import NavBar from "./NavBar/NavBar";
import map from 'lodash/map';
import Section from "./Section/Section";

const cnForm = cn('Form');

const testNames = ['Базовая информация', 'Образование', 'Опыт работы'];
const sections = [{label: "Базовая информация"}, {label: "Образование"}, {label: "Опыт работы"}];
const Form = () => {

  const [activeSectionLabel, setActiveSectionLabel] = useState<string>(testNames[0]);
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);

  const nextSectionByName = (label: string) => {
    const currentIndex = testNames.indexOf(label)
    setActiveSectionIndex(currentIndex);
    setActiveSectionLabel(label);
  }

  const nextSection = () => {
    const currentIndex = activeSectionIndex + 1;
    setActiveSectionIndex(currentIndex);
    setActiveSectionLabel(testNames[currentIndex]);
  }

  const prevSection = () => {
    const currentIndex = activeSectionIndex - 1;
    setActiveSectionIndex(currentIndex);
    setActiveSectionLabel(testNames[currentIndex]);
  }

  return (
    <div className={cnForm()}>
      <NavBar
        sectionLabels={testNames}
        activeSectionLabel={activeSectionLabel}
        nextSectionByName={nextSectionByName}
      />
      {
        map(sections, section => {
          if (section.label !== activeSectionLabel) {
            return null;
          }

          return (
            <Section
              data={section.label}
              nextSection={nextSection}
              prevSection={prevSection}
              currentIndex={activeSectionIndex}
              maxIndex={testNames.length - 1}
            />)
        })
      }
    </div>
  )
}

export default Form;