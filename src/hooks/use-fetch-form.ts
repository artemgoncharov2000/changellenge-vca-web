import {useEffect, useState} from "react";
import {api} from "../lib/api/api-client";
import { FormDataT } from '../types/form';

const useFetchForm = (): FormDataT | null => {
    const [formData, setFormData] = useState<FormDataT>();

    useEffect(() => {
        api.getForm()
            .then(data => {
                setFormData(data);
            })
            .catch(err => {
                console.log(`Failed to fetch form data: ${err}`);
            })
    }, [])

    return formData ?? null;
}

export default useFetchForm;