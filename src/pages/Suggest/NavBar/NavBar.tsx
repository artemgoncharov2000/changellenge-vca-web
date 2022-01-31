import React, { FC } from 'react';
import './NavBar.scss';
import map from 'lodash/map';
import { cn } from '@bem-react/classname';

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
        <div className={'suggest-page-nav-bar'}>
            {
                map(sectionLabels, (label, index) => (
                    <div key={`${label}_${index}`} className={''}>
                        <button
                            type="button"
                            className={
                                `suggest-page-nav-bar__button 
                                 
                                 ${label === activeSectionLabel ? 'suggest-page-nav-bar__button_selected' : ''}
                            `}
                            onClick={() => onClick(label)}
                        >
                            {label}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default NavBar;