import React, {FunctionComponent, useState} from 'react';
import EllipseIcon from '../../../assets/icons/ellipse-icon.svg';
import './SuggestFeedback.scss'
interface OwnProps {
    suggestId?: string; // TODO: Сделать обязательным полем
    extraClassname?: string;
    extraTitleClassname?: string;
    extraButtonClassname?: string;
    extraImageClassname?: string;
    handleGetFeedback: (isRelevant: boolean) => void;
}

type Props = OwnProps;

const SuggestFeedback: FunctionComponent<Props> = (props) => {
    const {
        extraClassname,
        extraTitleClassname,
        extraButtonClassname,
        extraImageClassname,
        handleGetFeedback,
    } = props;
  // TODO Добавить действия при нажатии на Да или Нет
    const [hasFeedback, setHasFeedback] = useState(false);

    const handleNegativeFeedback = () => {
        handleGetFeedback(false);
        setHasFeedback(true);
    }

    const handlePositiveFeedback = () => {
        handleGetFeedback(true);
        setHasFeedback(true);
    }

    return (
        <div className={`suggest-feedback ${extraClassname}`}>
            {
                hasFeedback
                ?
                    <p className={`suggest-feedback__title ${extraTitleClassname}`}>{"Спасибо за ваш отзыв!"}</p>
                :
                    <>
                        <p className={`suggest-feedback__title ${extraTitleClassname}`}>{'Была ли данная рекомендация полезна для Вас?'}</p>
                        <div className={'suggest-feedback-action-block'}>
                            <button
                                className={`suggest-feedback-action-block__button ${extraButtonClassname}`}
                                type="button"
                                onClick={handlePositiveFeedback}
                            >
                                {'Да'}
                            </button>
                            <img className={`suggest-feedback-action-block__image ${extraImageClassname}`} src={EllipseIcon} alt={'ellipse-icon'}/>
                            <button
                                className={`suggest-feedback-action-block__button ${extraButtonClassname}`}
                                type="button"
                                onClick={handleNegativeFeedback}
                            >
                                {'Нет'}
                            </button>
                        </div>
                    </>
            }

        </div>
    );
};

export default SuggestFeedback;
