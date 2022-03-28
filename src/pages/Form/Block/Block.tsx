import React, { FC } from 'react';
import {IBlockProps} from "./types";
import map from 'lodash/map';
import Section from '../Section/Section';
import './Block.scss';
import Button from "../../../components/styled-components/Button/Button";

const Block: FC<IBlockProps> = (props) => {
    const {
        blockData,
        goBack,
        goNext,
        isLast,
        activeTabIndex,
        updateInitialValues,
        visible,
    } = props;
    return (
        <div 
            className={'block-container'}
            style={{
                display: visible ? 'none' : '',
            }}
        >
            {
                map(blockData.sections, (section) => <Section updateInitialValues={updateInitialValues} key={section.id} sectionData={section} />)
            }
            <div className={'block-buttons-container'}>
                {activeTabIndex !== 0 && <Button label={"Назад"} onClick={goBack}/>}
                {!isLast && <Button label={"Вперед"} onClick={goNext} backgroundColor={'red'}/>}
                {isLast && <Button label={"Отправить"} backgroundColor={'red'} type="submit" />}
            </div>
        </div>
    )
}

export default Block;