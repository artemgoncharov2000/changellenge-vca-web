import React, { FC } from 'react';
import map from 'lodash/map';
import ArticleCard from "./ArticleCard/ArticleCard";
import './Acticle.scss';
import { useGetSuggests } from '../../../hooks/use-get-suggests';
import { ArticlesT, SuggestTypesEnum } from '../../../types/suggest';

const Article: FC = () => {

    const {suggests: articles, isError, isLoading} = useGetSuggests<ArticlesT>(SuggestTypesEnum.articles, 0);

    const getPageState = () => {
        if (isLoading) {
            return <p>{"Загружаем данные..."}</p>;
        }
        if (isError) {
            return <p>{"Ошибка загрузки"}</p>;
        }
        if (articles) {
            return (
                <>
                    <div className={'article-tab__content'}>
                        {map(articles, (article) =>
                            <ArticleCard
                                id={article.id}
                                key={article.id}
                                thumbnailUrl={article.thumbnailUrl}
                                title={article.title}
                                subtitle={article.subtitle}
                                description={article.description}
                                link={article.link}
                            />
                        )}
                    </div>
                </>
            )
        }
    }

    return (
        <div className={'article-tab'}>
            {getPageState()}
        </div>
    );
};

export default Article;