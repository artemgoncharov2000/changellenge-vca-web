import React, { FC } from "react";
import {ISectionProps} from "./types";
import map from 'lodash/map';
import Element from "../Element/Element";
import PlusIcon from '../../../assets/icons/plus-icon.svg';
import './Section.scss';

const Section: FC<ISectionProps> = (props) => {
    const {
        sectionData
    } = props;

    return (
        <div className={'section'}>
            <div className={'section__title'}>{sectionData.name}</div>
            <div className={'section__content'}>
                {
                    map(sectionData.elements, (element) => <Element key={element.id} elementData={element} />)
                }
            </div>
            {/*{buttonTitle && (*/}
            {/*    <button className={'section__button'}>*/}
            {/*        <img src={PlusIcon} alt={'plus-icon'}/>*/}
            {/*        <span>{buttonTitle}</span>*/}
            {/*    </button>*/}
            {/*)}*/}
        </div>
    )
}

export default Section;