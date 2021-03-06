import React, {FC, forwardRef, useState} from 'react';
import {IDatePickerProps} from "./types";
import ReactDatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru/index.js";
import formatISO from 'date-fns/formatISO';
import './DatePicker.scss';
import "react-datepicker/dist/react-datepicker.css";
import {useField} from "formik";
import DateIcon from '../../../../assets/icons/calendar-icon.svg';

registerLocale('ru', ru);

const validateInput = (value: string) => {
    let error;
    if (value === '') {
        error = '* Обязательное поле';
    }
    return error;
}

const DatePicker: FC<IDatePickerProps> = (props) => {
    const {
        elemId,
        isDateRange
    } = props;
    const [field, meta, helpers] = useField({
        name: elemId,
        validate: validateInput,
    });

    const handleChangeStartDate = (date: Date | null) => {
        if (!date) {
            return;
        }
        const formattedDate = formatISO(date, { representation: 'date' })
        helpers.setValue({
            ...field.value,
            from: formattedDate
        });
    }

    const handleChangeEndDate = (date: Date | null) => {
        if (!date) {
            return;
        }
        const formattedDate = formatISO(date, { representation: 'date' })
        helpers.setValue({
            ...field.value,
            to: formattedDate,
        })
    }
    // TODO: remove any
    const CustomInput = forwardRef<HTMLInputElement>((props: any, ref) => {
        const { value, onClick} = props;        
        return (
            <div className={'date-picker_input-container'} onClick={onClick}>
                <span className={`date-picker_input-container__value${!value && '-empty'}`} ref={ref}>{value || 'Введите дату'}</span>
                <img src={DateIcon} alt={'date-icon'}/>
            </div>
        );
    }) 

    return (
        <div className={'date-picker-wrapper'}>
            <ReactDatePicker
                className={'date-picker-wrapper__date-picker'}
                selected={field.value ? new Date(field.value.from) : null}
                startDate={field.value ? new Date(field.value.from) : null}
                endDate={field.value ? new Date(field.value.to) : null}
                selectsStart = {isDateRange}
                onChange={handleChangeStartDate}
                locale="ru"
                closeOnScroll={true}
                showMonthDropdown
                showYearDropdown
                dropdownMode={'select'}
                dateFormat="dd/MM/yyyy"
                customInput={<CustomInput />}
                placeholderText='Выберите дату'
            />
            { isDateRange && (
                <>
                    <div className={'date-picker-wrapper__divider'}>-</div>
                    <ReactDatePicker
                        className={'date-picker-wrapper__date-picker'}
                        selected={field.value ? new Date(field.value.to) : null}
                        startDate={field.value ? new Date(field.value.from) : null}
                        endDate={field.value ? new Date(field.value.to) : null}
                        selectsEnd
                        onChange={handleChangeEndDate}
                        locale="ru"
                        closeOnScroll={true}
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode={'select'}
                        dateFormat="dd/MM/yyyy"
                        customInput={<CustomInput />}
                    />
                </>

            )}
            {meta.error && <div className={'date-picker-wrapper__error'}>{meta.error}</div>}
        </div>
    );
}

export default DatePicker;