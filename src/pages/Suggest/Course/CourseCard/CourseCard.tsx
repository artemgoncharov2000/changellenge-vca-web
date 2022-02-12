import React, { FunctionComponent } from 'react';
import SuggestFeedback from "../../../../components/styled-components/SuggestFeedback/SuggestFeedback";
import './CourseCard.scss';

interface OwnProps {
    imageUrl: string;
    title: string;
    subtitle: string;

}

type Props = OwnProps;

const CourseCard: FunctionComponent<Props> = (props) => {
    const {
        imageUrl,
        title,
        subtitle,
    } = props;
  return (
      <div
          className={'course-card'}
          style={{
              backgroundImage: `url(${imageUrl})`,
          }}
      >
          <div  className={'course-card__title'}>{title}</div>
          <div  className={'course-card__subtitle'}>{subtitle}</div>
          <button
            type="button"
            className={'course-card__button'}
          >
              {'Перейти'}
          </button>
          <SuggestFeedback
              extraClassname={'course-card-suggest-feedback'}
              extraButtonClassname={'course-card-suggest-feedback__button'}
              extraTitleClassname={'course-card-suggest-feedback__title'}
              extraImageClassname={'course-card-suggest-feedback__image'}
          />
      </div>
  );
};

export default CourseCard;
