import React, {ChangeEvent, ChangeEventHandler, FC, useState} from 'react';
import { Field, useField } from 'formik';
import {IInputField} from "./types";
import './InputField.scss';

const InputField: FC<IInputField> = ({ elemId }) => {
    const [field, meta, helpers] = useField(elemId);

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        helpers.setValue(e.target.value);
    }

    return (
        <div className={'input-field'}>
            <input type="text" className={'input-field__input'} value={field.value ?? ''} onChange={handleChangeValue} />
            {meta.error && meta.touched && (
                <div className={'input-field__error'}>{meta.error}</div>
            )}
        </div>
    )
}

export default InputField;