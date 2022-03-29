import React, {ChangeEvent, ChangeEventHandler, FC, useState} from 'react';
import { Field, useField } from 'formik';
import {IInputField} from "./types";
import './InputField.scss';

const validateInput = (value: string) => {
    let error;
    if (value === '') {
        error = 'Обязательное поле';
    }
    return error;
}

const InputField: FC<IInputField> = ({ elemId }) => {
    const [field, meta, helpers] = useField({
        name: elemId,
        validate: validateInput,
    });
    
    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        helpers.setValue(e.target.value);
    }    
    
    return (
        <div className={'input-field'}>
            <input {...field} type="text" className={'input-field__input'} value={field.value ?? ''} onChange={handleChangeValue} />
            {meta.error && meta.touched && (
                <div className={'input-field__error'}>{`* ${meta.error}`}</div>
            )}
        </div>
    )
}

export default InputField;