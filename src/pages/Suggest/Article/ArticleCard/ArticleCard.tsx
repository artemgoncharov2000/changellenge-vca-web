import React, { FunctionComponent } from 'react';
import SuggestFeedback from "../../../../components/styled-components/SuggestFeedback/SuggestFeedback";
import './ArticleCard.scss';

interface OwnProps {
    imageUrl: string;
    title: string;
    subtitle: string;
    description: string;
}

type Props = OwnProps;

const ArticleCard: FunctionComponent<Props> = (props) => {
  const {
    imageUrl,
    title,
    subtitle,
    description,
  } = props;

  return (
      <div className={'article-card'}>
          <img
              className={'article-card__image'}
              src={imageUrl}
              alt={imageUrl}
          />
          <div className={'article-card__subtitle'}>{subtitle}</div>
          <div className={'article-card__title'}>{title}</div>
          <div className={'article-card__description'}>{description}</div>
          <SuggestFeedback
            extraTitleClassname={'article-card-suggest-feedback__title'}
            extraButtonClassname={'article-card-suggest-feedback__button'}
            extraImageClassname={'article-card-suggest-feedback__image'}
          />
      </div>
  );
};

export default ArticleCard;
