import React, {FunctionComponent, useState} from 'react';
import { useParams } from 'react-router-dom';
import SuggestFeedback from "../../../../components/styled-components/SuggestFeedback/SuggestFeedback";
import api from '../../../../lib/api/api-client';
import { SuggestTypesEnum } from '../../../../types/suggest';
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
    const { sessionId } = useParams();
    const [isRelevant, setIsRelevant] = useState<boolean>(true);

    const handleChangeIsRelevant = (value: boolean) => {
        setIsRelevant(value);
    }

    if (!isRelevant) {
        return null;
    }

    const handleClickLink = () => {
        if (!sessionId) {
            return;
        }
        api.sendFeedBack(Number(sessionId), id, SuggestTypesEnum.articles, "READ");
    }
        
  return (
      <div className={'article-card'}>
          <img
              className={'article-card__image'}
              src={thumbnailUrl}
              alt={thumbnailUrl}
          />
          <div className={'article-card__subtitle'}>{subtitle}</div>
          <a className={'article-card__title'} target="_blank" href={link} onClick={handleClickLink}>{title}</a>
          <a className={'article-card__description'} target="_blank" href={link} onClick={handleClickLink}>{description}</a>
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
