import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../lib/api/api-client";
import { SuggestTypesEnum } from "../types/suggest";

export function useGetSuggests<T>(suggestType: SuggestTypesEnum, page: number) {
    const { sessionId } = useParams();
    const [suggests, setSuggests] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        if (!sessionId) {
            return;
        }

        api.getSuggestData(sessionId, suggestType, page)
        .then(data => {
            setSuggests(data);
            setIsLoading(false);
        })
        .catch(err => {
            console.log(`Failed to fetch events: ${err}`);
            setIsLoading(false);
            setIsError(true);
        });
    }, [page]);

    return {
        suggests,
        isError,
        isLoading,
    };
}