import React, { FC } from 'react';
import map from 'lodash/map';
import EventCard from "./EventCard/EventCard";
import './Event.scss';
import { useGetSuggests } from '../../../hooks/use-get-suggests';
import { EventsT, SuggestTypesEnum } from '../../../types/suggest';

const Event: FC = () => {
    const {suggests: events, isError, isLoading} = useGetSuggests<EventsT>(SuggestTypesEnum.events, 0);

    const getPageState = () => {
        if (isLoading) {
            return <p>{"Загружаем данные..."}</p>;
        }
        if (isError) {
            return <p>{"Ошибка загрузки"}</p>;
        }
        if (events) {
            return (
                <>
                    {map(events, (event) =>
                        <EventCard
                            id={event.id}
                            key={event.id}
                            thumbnailUrl={event.thumbnailUrl}
                            title={event.title}
                            subtitle={event.subtitle}
                            date={event.date}
                            link={event.link}
                        />
                    )}
                </>
            )
        }
    }


    return (
        <div className={'event-tab'}>
            {getPageState()}
        </div>
    );
};

export default Event;