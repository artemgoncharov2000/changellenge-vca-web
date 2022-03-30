import React, { FC, useState } from "react";
import {ISelectorFieldProps} from "./types";
import Select from "react-select";
import './SelectorField.scss';
import map from 'lodash/map';
import {useField} from "formik";

export interface StateOption {
    readonly value: string;
    readonly label: string;
}

const validateInput = (value: string) => {
    let error;
    if (value === '') {
        error = 'Обязательное поле';
    }
    return error;
}

const SelectorField: FC<ISelectorFieldProps> = (props) => {
    const {
        elemId,
        options,
        placeholder,
    } = props;

    const [field, meta, helpers] = useField({
        name: elemId,
        validate: validateInput,
    });

    const handleValueChange = ({value}: any) => {
        helpers.setValue(value)
    }

    return (
        <div className={'selector-field'}>
            <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder={placeholder}
                defaultValue={field.value ? {value: field.value, label: field.value} : null}
                name={field.name}
                onBlur={field.onBlur}
                onChange={handleValueChange}
                options={map(options, (option) => ({ value: option, label: option}))}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                })}
            />
            {meta.error && <div className={'selector-field__error'}>{`* ${meta.error}`}</div>}
        </div>

    )
}

export default SelectorField;