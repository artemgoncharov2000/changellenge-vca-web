import {useEffect, useState} from "react";
import api from "../lib/api/api-client";
import { IFormApi } from "../types/api";

const useFetchForm = () => {
    const [formData, setFormData] = useState<IFormApi>();
    const [isFailed, setIsFailed] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        api.getForm()
            .then(data => {
                setFormData(data);
                setIsLoading(false);
            })
            .catch(err => {
                setIsFailed(true);
                setIsLoading(false);
                console.log(`Failed to fetch form data: ${err}`);
            })
    }, [])

    return {
        data: formData ?? null,
        isFailed: isFailed,
        isLoading: isLoading,
    }
}

export default useFetchForm;