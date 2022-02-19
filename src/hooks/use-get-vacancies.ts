import {useEffect, useState} from "react";
import {SuggestTypesEnum, VacanciesT} from "../types/suggest";
import {api} from "../lib/api/api-client";

const useGetVacancies = (page: number): VacanciesT | null => {
    const [vacancies, setVacancies] = useState<VacanciesT | null>(null);

    useEffect(() => {
        api.getSuggestData(SuggestTypesEnum.vacancies, page)
            .then(data => setVacancies(data))
            .catch(err => console.log(`Failed to fetch vacancies: ${err}`));
    }, [page]);

    return vacancies;
}

export default useGetVacancies;