import {useEffect, useState} from "react";
import api from "../lib/api/api-client";
import { IFormApi } from "../types/api";

const useFetchForm = (): IFormApi | null => {
    const [formData, setFormData] = useState<IFormApi>();

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