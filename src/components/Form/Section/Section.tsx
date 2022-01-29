import React, { FC } from "react";
import {ISection} from "./types";
import map from 'lodash/map';
import Element from "../Element/Element";
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
        </div>
    )
}

export default Section;