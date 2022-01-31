import React, { FC, useState } from "react";
import { cn } from '@bem-react/classname';
import './NavBar.scss';
import map from 'lodash/map';
import RightArrow from '../../../assets/icons/right-arrow-icon.svg';

const cnNavBar = cn('NavBar');
const cnNavItem = cn('NavItem');

type PropsT = {
  activeSectionLabel: string;
  sectionLabels: Array<string>;
  nextSectionByName: (label: string) => void;
}

const NavBar: FC<PropsT> = ({activeSectionLabel, sectionLabels, nextSectionByName}) => {

  const onClick = (label: string) => {
    nextSectionByName(label);
  }

  return (
    <div className={cnNavBar()}>
      {
        map(sectionLabels, (label, index) => (
          <div key={`${label}_${index}`} className={cnNavItem()}>
            <button
              type="button"
              className={cnNavItem('Button', {color: label === activeSectionLabel ? "red" : "default"})}
              onClick={() => onClick(label)}
            >
              {label}
            </button>
            {index !== sectionLabels.length - 1 && <img className={cnNavItem('Image')} src={RightArrow}/>}
          </div>
        ))
      }
    </div>
  )
}

export default NavBar;