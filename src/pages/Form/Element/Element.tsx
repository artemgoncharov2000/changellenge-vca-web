import React, { FC } from 'react';
import {IElementProps} from "./types";
import './Element.scss';
import InputField from "./InputField/InputField";
import SelectorField from "./SelectorField/SelectorField";
import TextArea from "./TextArea/TextArea";
import DatePicker from "./DatePicker/DatePicker";

const Element: FC<IElementProps> = (props) => {
    const {
        elementData
    } = props;

    const getInput = () => {
        switch (elementData.type) {
            case "TEXT_INPUT":
                return <InputField elemId={elementData.id}/>
            case "SELECTOR":
                return <SelectorField elemId={elementData.id} options={elementData.options ?? []} placeholder={elementData.placeholder}/>
            case "TEXT_AREA":
                return <TextArea elemId={elementData.id} />
            case "INTERVAL_DATE_PICKER":
                return <DatePicker elemId={elementData.id} isDateRange/>
            case "DATE_PICKER":
                return <DatePicker elemId={elementData.id}/>    
            default:
                return null;
        }
    }

    return (
        <div className={'element'}>
            <div className={'element-text-block'}>
                <div className={'element-text-block__title'}>{elementData.title}</div>
                {elementData.description && <div className={'element-text-block__subtitle'}>{elementData.description}</div>}
            </div>
            {getInput()}
        </div>
    )
}

export default Element;