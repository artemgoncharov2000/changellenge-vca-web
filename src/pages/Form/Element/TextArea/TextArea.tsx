import React, {ChangeEvent, FC} from 'react';
import {ITextAreaProps} from "./types";
import {useField} from "formik";
import './TextArea.scss';

const validateInput = (value: string) => {
    let error;
    if (value === '') {
        error = 'Обязательное поле';
    }
    return error;
}

const TextArea: FC<ITextAreaProps> = ({ elemId }) => {

    const [field, meta, helpers] = useField({
        name: elemId,
        validate: validateInput,
    });

    const handleChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        helpers.setValue(e.target.value);
    }

    return (
        <div className={'text-area-wrapper'}>
            <textarea
                {...field}
                className={'text-area-wrapper__text-area'}
                value={field.value ?? ''}
                onChange={handleChangeValue}
            />
            {meta.error && meta.touched && <div className={'text-area-wrapper__error'}>{`* ${meta.error}`}</div>}
        </div>
    )
}

export default TextArea;