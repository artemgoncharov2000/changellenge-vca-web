import React, { FC } from 'react';
import {IBlock} from "./types";
import map from 'lodash/map';
import Section from '../Section/Section';
import './Block.scss';

const Block: FC<IBlock> = (props) => {
    const {
        id,
        name,
        sections
    } = props;

    return (
        <div className={'block-container'}>
            {
                map(sections, (section) => <Section key={section.id} {...section} />)
            }
        </div>
    )
}

export default Block;