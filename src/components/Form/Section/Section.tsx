import React, { FC } from "react";
import {ISection} from "./types";
import map from 'lodash/map';
import Element from "../Element/Element";
import PlusIcon from '../../../assets/icons/plus-icon.svg';
import './Section.scss';

const Section: FC<ISection> = (props) => {
    const {
        id,
        name,
        buttonTitle,
        elements,
    } = props;

    return (
        <div className={'section'}>
            <div className={'section__title'}>{name}</div>
            <div className={'section__content'}>
                {
                    map(elements, (element) => <Element key={element.id} {...element} />)
                }
            </div>
            {buttonTitle && (
                <button className={'section__button'}>
                    <img src={PlusIcon} alt={'plus-icon'}/>
                    <span>{buttonTitle}</span>
                </button>
            )}
        </div>
    )
}

export default Section;