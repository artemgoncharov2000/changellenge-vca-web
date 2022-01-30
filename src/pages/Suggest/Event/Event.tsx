import React, { FC } from 'react';
import map from 'lodash/map';
import EventCard from "./EventCard/EventCard";
import './Event.scss';
const vacancies = [
    {
        imageUrl: 'https://changellenge.com/upload/iblock/291/vmg2eufhboyfyj6alhzryfwf2dezhnhh.png',
        title: 'Начни строить карьеру на первых курсах',
        subtitle: 'Сделай первые шаги и получи опыт в топовой компании еще во время учебы',
        date: '20-03-2022'
    },
    {
        imageUrl: 'https://changellenge.com/upload/iblock/291/vmg2eufhboyfyj6alhzryfwf2dezhnhh.png',
        title: 'Начни строить карьеру на первых курсах',
        subtitle: 'Сделай первые шаги и получи опыт в топовой компании еще во время учебы',
        date: '20-03-2022'
    },
    {
        imageUrl: 'https://changellenge.com/upload/iblock/291/vmg2eufhboyfyj6alhzryfwf2dezhnhh.png',
        title: 'Начни строить карьеру на первых курсах',
        subtitle: 'Сделай первые шаги и получи опыт в топовой компании еще во время учебы',
        date: '20-03-2022'
    },
    {
        imageUrl: 'https://changellenge.com/upload/iblock/291/vmg2eufhboyfyj6alhzryfwf2dezhnhh.png',
        title: 'Начни строить карьеру на первых курсах',
        subtitle: 'Сделай первые шаги и получи опыт в топовой компании еще во время учебы',
        date: '20-03-2022'
    },
]
const Event: FC = () => {

    return (
        <div className={'event-tab'}>
            {map(vacancies, (vacancy, index) =>
                <EventCard
                    key={index}
                    imageUrl={vacancy.imageUrl}
                    title={vacancy.title}
                    subtitle={vacancy.subtitle}
                    date={vacancy.date}
                />
            )}
            <button type="button" className={'event-tab__button'}>{"Загрузить еще"}</button>
        </div>
    );
};

export default Event;