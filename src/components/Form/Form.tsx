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

  const nextSectionByName = (label: string) => {
    setActiveSectionLabel(label);
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

          return <Section data={section.label} />
        })
      }
    </div>
  )
}

export default Form;