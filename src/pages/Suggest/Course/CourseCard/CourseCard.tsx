import React, {FunctionComponent, useState} from 'react';
import SuggestFeedback from "../../../../components/styled-components/SuggestFeedback/SuggestFeedback";
import './CourseCard.scss';

interface OwnProps {
    id: number;
    thumbnailUrl: string;
    title: string;
    subtitle: string;
    link: string;
}

type Props = OwnProps;

const CourseCard: FunctionComponent<Props> = (props) => {
    const {
        id,
        thumbnailUrl,
        title,
        subtitle,
        link,
    } = props;
    const [isRelevant, setIsRelevant] = useState<boolean>(true);

    const handleChangeIsRelevant = (value: boolean) => {
        setIsRelevant(value);
    }

    if (!isRelevant) {
        return null;
    }
  return (
      <div
          className={'course-card'}
          style={{
              backgroundImage: `url(${thumbnailUrl})`,
          }}
      >
          <div  className={'course-card__title'}>{title}</div>
          <div  className={'course-card__subtitle'}>{subtitle}</div>
          <a
            className={'course-card__link'}
            target="_blank"
            href={link}
          >
              {'Перейти'}
          </a>
          <SuggestFeedback
              extraClassname={'course-card-suggest-feedback'}
              extraButtonClassname={'course-card-suggest-feedback__button'}
              extraTitleClassname={'course-card-suggest-feedback__title'}
              extraImageClassname={'course-card-suggest-feedback__image'}
              handleGetFeedback={handleChangeIsRelevant}
          />
      </div>
  );
};

export default CourseCard;
