import React, { FC } from 'react';
import map from 'lodash/map';
import ArticleCard from "./ArticleCard/ArticleCard";
import './Acticle.scss';
import useGetArticles from "../../../hooks/use-get-articles";

const Article: FC = () => {

    const articles = useGetArticles(0);

    return (
        <div className={'article-tab'}>
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
            <button type="button" className={'article-tab__button'}>{"Загрузить еще"}</button>
        </div>
    );
};

export default Article;