import {ArticlesT, SuggestTypesEnum} from "../types/suggest";
import {useEffect, useState} from "react";
import {api} from "../lib/api/api-client";

const useGetArticles = (page: number): ArticlesT | null => {
    const [articles, setArticles] = useState<ArticlesT | null>(null);

    useEffect(() => {
        api.getSuggestData(SuggestTypesEnum.articles, page)
            .then(data => setArticles(data))
            .catch(err => console.log(`Failed to fetch articles: ${err}`));
    }, [page]);

    return articles;
}

export default useGetArticles;