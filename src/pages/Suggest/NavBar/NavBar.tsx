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
            <a target="_blank" className='suggest-page-nav-bar_feedback-link' href='https://forms.yandex.ru/u/624055902e9d2ab7b0e2a8b0/'>Расскажите о своих впечатлениях</a>
        </div>
    )
}

export default NavBar;