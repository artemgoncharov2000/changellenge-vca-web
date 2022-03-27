import React, { FC, useState } from "react";
import {ISectionProps} from "./types";
import map from 'lodash/map';
import Element from "../Element/Element";
import PlusIcon from '../../../assets/icons/plus-icon.svg';
import './Section.scss';

const Section: FC<ISectionProps> = (props) => {
    const {
        sectionData,
        updateInitialValues
    } = props;

    const [groups, setGroups] = useState([[...sectionData.elements]]);

    const addGroup = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const newGroups = [...groups];
        const newGroup = [...sectionData.elements];
        newGroups.push(newGroup);
        setGroups(newGroups);

        const data: {[elemId: number]: string} = {}
        newGroup.forEach(elem => {
            data[elem.id] = '';
        })

        updateInitialValues(sectionData.id, data);
    }

    return (
        <div className={'section'}>
            <div className={'section__title'}>{sectionData.name}</div>
            {
                map(groups, (group, groupIndex) => (
                    <div key={groupIndex} className={'section__content'}>
                        {
                            map(group, (element) => <Element key={element.id} elemId={`${sectionData.id}.${groupIndex}.${element.id}`} elementData={element} />)
                        }
                    </div>
                ))
            }
            {sectionData?.buttonTitle && (
                <button className={'section__button'} onClick={addGroup}>
                    <img src={PlusIcon} alt={'plus-icon'}/>
                    <span>{sectionData?.buttonTitle}</span>
                </button>
            )}
        </div>
    )
}

export default Section;

function forEach() {
    throw new Error("Function not implemented.");
}
