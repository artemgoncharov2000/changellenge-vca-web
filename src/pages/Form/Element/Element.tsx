import React, { FC } from 'react';
import {IElement} from "./types";
import './Element.scss';
import InputField from "./InputField/InputField";
import SelectorField from "./SelectorField/SelectorField";
import TextArea from "./TextArea/TextArea";
import DatePicker from "./DatePicker/DatePicker";

const Element: FC<IElement> = (props) => {
    const {
        id,
        title,
        description,
        options,
        type,
        placeholder,
    } = props;

    const getInput = () => {
        switch (type) {
            case "TEXT_INPUT":
                return <InputField elemId={id}/>
            case "SELECTOR":
                return <SelectorField elemId={id} options={options ?? []} placeholder={placeholder}/>
            case "TEXT_AREA":
                return <TextArea elemId={id} />
            case "INTERVAL_DATE_PICKER":
                return <DatePicker elemId={id} isDateRange/>
            default:
                return null;
        }
    }

    return (
        <div className={'element'}>
            <div className={'element-text-block'}>
                <div className={'element-text-block__title'}>{title}</div>
                {description && <div className={'element-text-block__subtitle'}>{description}</div>}
            </div>
            {getInput()}
        </div>
    )
}

export default Element;