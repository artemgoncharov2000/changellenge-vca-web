import React, { FunctionComponent } from 'react';
import EllipseIcon from '../../../assets/icons/ellipse-icon.svg';
import './SuggestFeedback.scss'
interface OwnProps {
    suggestId?: string; // TODO: Сделать обязательным полем
}

type Props = OwnProps;

const SuggestFeedback: FunctionComponent<Props> = (props) => {
  // TODO Добавить действия при нажатии на Да или Нет
  return (
      <div className={'suggest-feedback'}>
          <p className={'suggest-feedback__title'}>{'Была ли данная рекомендация полезна для Вас?'}</p>
          <div className={'suggest-feedback-action-block'}>
              <button className={'suggest-feedback-action-block__button'} type="button">{'Да'}</button>
              <img className={'suggest-feedback-action-block__image'} src={EllipseIcon} alt={'ellipse-icon'}/>
              <button className={'suggest-feedback-action-block__button'} type="button">{'Нет'}</button>
          </div>
      </div>
  );
};

export default SuggestFeedback;
