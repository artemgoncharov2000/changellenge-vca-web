import React, { FC } from 'react';
import {IBlockProps} from "./types";
import map from 'lodash/map';
import Section from '../Section/Section';
import './Block.scss';
import Button from "../../../components/styled-components/Button/Button";

const Block: FC<IBlockProps> = (props) => {
    const {
        id,
        name,
        sections,
        goBack,
        goNext,
        submitForm,
        isLast,
    } = props;

    return (
        <div className={'block-container'}>
            {
                map(sections, (section) => <Section key={section.id} {...section} />)
            }
            <div className={'block-buttons-container'}>
                <Button label={"Назад"} onClick={goBack} />
                {!isLast && <Button label={"Вперед"} onClick={goNext} backgroundColor={'red'}/>}
                {isLast && <Button label={"Отправить"} backgroundColor={'red'} type="submit" />}
            </div>
        </div>
    )
}

export default Block;