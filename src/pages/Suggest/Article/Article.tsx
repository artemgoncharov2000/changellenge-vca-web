import React, { FC } from 'react';
import map from 'lodash/map';
import ArticleCard from "./ArticleCard/ArticleCard";
import './Acticle.scss';
const vacancies = [
    {
        imageUrl: 'https://media-exp1.licdn.com/dms/image/C5612AQEHgsNz8br1cw/article-cover_image-shrink_600_2000/0/1614186250331?e=1644451200&v=beta&t=BhEzBuYTuSV1Eo6O9vdV7qJXVi6u-WjSydUi4Uf5NHo',
        title: 'Почему кандидатов не берут на работу',
        description: 'Говорим про пять самых распространенных причин, по которым отказывают в трудоустройстве.',
        subtitle: '#мы_вам_перезвоним',
    },
    {
        imageUrl: 'https://media.istockphoto.com/photos/happy-african-american-woman-reading-book-at-home-picture-id1283454912?k=20&m=1283454912&s=170667a&w=0&h=hvgsSKWbBi0Hv6Q_MTLMP76cQGs8PK4aj_fqklt_Byg=',
        title: 'Как стать топ-студентом: советы бывалых',
        description: '14 советов от круглых отличников.',
        subtitle: '#мы_вам_перезвоним',
    },
    {
        imageUrl: 'https://www.tadviser.ru/images/thumb/f/f0/EY-launches-Ethereum-based-procurement-solution-for-enterprises.jpg/840px-EY-launches-Ethereum-based-procurement-solution-for-enterprises.jpg',
        title: 'Из научной лаборатории в консалтинг: как успешно изменить карьерную траекторию',
        description: 'Думаете, что технические специальности не нужны в консалтинге? Разрушаем главные мифы о технарях в профессии и рассказываем, за что их любят в Big4, вместе с консультантом EY и выпускником института новых метериалов и нанотехнологий НИТУ “МИСиС”.',
        subtitle: 'Строим карьеру',
    },
    {
        imageUrl: 'https://media-exp1.licdn.com/dms/image/C5612AQEHgsNz8br1cw/article-cover_image-shrink_600_2000/0/1614186250331?e=1644451200&v=beta&t=BhEzBuYTuSV1Eo6O9vdV7qJXVi6u-WjSydUi4Uf5NHo',
        title: 'Тестировщик по автоматизированному тестированияю (QA Automation Engineer)',
        description: 'Говорим про пять самых распространенных причин, по которым отказывают в трудоустройстве.',
        subtitle: '#мы_вам_перезвоним',
    },
]
const Article: FC = (props) => {

    return (
        <div className={'article-tab'}>
            <div className={'article-tab__content'}>
                {map(vacancies, (vacancy, index) =>
                    <ArticleCard
                        key={index}
                        imageUrl={vacancy.imageUrl}
                        title={vacancy.title}
                        subtitle={vacancy.subtitle}
                        description={vacancy.description}
                    />
                )}
            </div>
            <button type="button" className={'article-tab__button'}>{"Загрузить еще"}</button>
        </div>
    );
};

export default Article;