import React, {ChangeEvent, FC} from 'react';
import {ITextAreaProps} from "./types";
import {useField} from "formik";
import './TextArea.scss';

const TextArea: FC<ITextAreaProps> = ({ elemId }) => {

    const [field, meta, helpers] = useField(String(elemId));

    const handleChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        helpers.setValue(e.target.value);
    }

    return (
        <div className={'text-area-wrapper'}>
            <textarea
                className={'text-area-wrapper__text-area'}
                value={field.value ?? ''}
                onChange={handleChangeValue}
            />
            {meta.error && <div className={'text-area-wrapper__error'}>{meta.error}</div>}
        </div>
    )
}

export default TextArea;