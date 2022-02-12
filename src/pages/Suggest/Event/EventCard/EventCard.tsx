import React, { FunctionComponent } from 'react';
import SuggestFeedback from "../../../../components/styled-components/SuggestFeedback/SuggestFeedback";
import './EventCard.scss';
import TestImage from '../../../../assets/local-images/vmg2eufhboyfyj6alhzryfwf2dezhnhh.png';

interface OwnProps {
    imageUrl: string;
    title: string;
    subtitle: string;
    date: string;
}

type Props = OwnProps;

const EventCard: FunctionComponent<Props> = (props) => {
    const {
        imageUrl,
        title,
        subtitle,
        date,
    } = props;

  return (
      <div className={'event-card'}>
          <div
              className={'event-card__image'}
              style={{backgroundImage: `url(${TestImage})`}}
          />
          <div className={'event-card-content'}>
              <div className={'event-card-content__title'}>{title}</div>
              <div className={'event-card-content__subtitle'}>{subtitle}</div>
              <div className={'event-card-content-action-container'}>
                  <div className={'event-card-content-action-container-date'}>
                      <div className={'event-card-content-action-container-date__day'}>{"08"}</div>
                      <div className={'event-card-content-action-container-date_month'}>{"Февраля"}</div>
                  </div>
                  <button
                      type="button"
                      className={'event-card-content-action-container__button'}
                  >
                      {'Участвовать'}
                  </button>
              </div>
              <SuggestFeedback/>
          </div>
      </div>
  );
};

export default EventCard;
