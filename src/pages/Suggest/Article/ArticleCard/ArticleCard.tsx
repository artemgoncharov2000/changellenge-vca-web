import React, {FunctionComponent, useState} from 'react';
import SuggestFeedback from "../../../../components/styled-components/SuggestFeedback/SuggestFeedback";
import './ArticleCard.scss';

interface OwnProps {
    id: number;
    thumbnailUrl: string;
    title: string;
    subtitle: string;
    description: string;
    link: string;
}

type Props = OwnProps;

const ArticleCard: FunctionComponent<Props> = (props) => {
  const {
      id,
      thumbnailUrl,
      title,
      subtitle,
      description,
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
      <div className={'article-card'}>
          <img
              className={'article-card__image'}
              src={thumbnailUrl}
              alt={thumbnailUrl}
          />
          <div className={'article-card__subtitle'}>{subtitle}</div>
          <a className={'article-card__title'} target="_blank" href={link}>{title}</a>
          <a className={'article-card__description'} target="_blank" href={link}>{description}</a>
          <SuggestFeedback
            extraTitleClassname={'article-card-suggest-feedback__title'}
            extraButtonClassname={'article-card-suggest-feedback__button'}
            extraImageClassname={'article-card-suggest-feedback__image'}
            handleGetFeedback={handleChangeIsRelevant}
          />
      </div>
  );
};

export default ArticleCard;
