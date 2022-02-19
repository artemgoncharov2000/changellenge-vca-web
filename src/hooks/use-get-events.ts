import {EventsT, SuggestTypesEnum} from "../types/suggest";
import {useEffect, useState} from "react";
import {api} from "../lib/api/api-client";

const useGetEvents = (page: number): EventsT | null => {
    const [events, setEvents] = useState<EventsT | null>(null);

    useEffect(() => {
        api.getSuggestData(SuggestTypesEnum.events, page)
            .then(data => setEvents(data))
            .catch(err => console.log(`Failed to fetch events ${err}`));
    }, [page]);

    return events;
}

export default useGetEvents;