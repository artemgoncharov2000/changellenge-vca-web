import React, {FunctionComponent, useState} from 'react';
import SuggestFeedback from "../../../../components/styled-components/SuggestFeedback/SuggestFeedback";
import './EventCard.scss';

const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабя"
];


interface OwnProps {
    id: number,
    thumbnailUrl: string;
    title: string;
    subtitle: string;
    date: string;
    link: string;
}

type Props = OwnProps;

const EventCard: FunctionComponent<Props> = (props) => {
    const {
        thumbnailUrl,
        title,
        subtitle,
        date,
        link,
    } = props;

    const [day, month] = date.split('-');
    const monthName = monthNames[Number(month)];
    const [isRelevant, setIsRelevant] = useState<boolean>(true);

    const handleChangeIsRelevant = (value: boolean) => {
        setIsRelevant(value);
    }

    if (!isRelevant) {
        return null;
    }

  return (
      <div className={'event-card'}>
          <div
              className={'event-card__image'}
              style={{backgroundImage: `url(${thumbnailUrl})`}}
          />
          <div className={'event-card-content'}>
              <div className={'event-card-content__title'}>{title}</div>
              <div className={'event-card-content__subtitle'}>{subtitle}</div>
              <div className={'event-card-content-action-container'}>
                  <div className={'event-card-content-action-container-date'}>
                      <div className={'event-card-content-action-container-date__day'}>{day}</div>
                      <div className={'event-card-content-action-container-date_month'}>{monthName}</div>
                  </div>
                  <a
                      href={link}
                      target="_blank"
                      className={'event-card-content-action-container__link'}
                  >
                      {'Участвовать'}
                  </a>
              </div>
              <SuggestFeedback handleGetFeedback={handleChangeIsRelevant}/>
          </div>
      </div>
  );
};

export default EventCard;
