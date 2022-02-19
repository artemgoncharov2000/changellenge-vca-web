import React, { FC } from 'react';
import map from 'lodash/map';
import EventCard from "./EventCard/EventCard";
import './Event.scss';
import useGetEvents from "../../../hooks/use-get-events";

const Event: FC = () => {
    const events = useGetEvents(0);
    return (
        <div className={'event-tab'}>
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
            <button type="button" className={'event-tab__button'}>{"Загрузить еще"}</button>
        </div>
    );
};

export default Event;