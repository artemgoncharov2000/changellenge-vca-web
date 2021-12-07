import React, { useState } from "react";
import { cn } from '@bem-react/classname';
import './Form.scss';
import NavBar from "./NavBar/NavBar";

const cnForm = cn('Form');

const testNames = ['Базовая информация', 'Образование', 'Опыт работы'];
const sections = ["1", "2", "3"];
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

    </div>
  )
}

export default Form;