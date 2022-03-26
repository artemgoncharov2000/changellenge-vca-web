import React, {FC, useState} from 'react';
import './VacancyCard.scss';
import {IVacancyCardProps} from "./types";
import ChangellengeArrowIcon from '../../../../assets/icons/changellenge-arrow-logo.svg';
import SuggestFeedback from "../../../../components/styled-components/SuggestFeedback/SuggestFeedback";
import EllipseIcon from '../../../../assets/icons/ellipse-icon.svg';

const VacancyCard: FC<IVacancyCardProps> = (props) => {
    const {
        thumbnailUrl,
        title,
        location,
        companyName,
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
        <div className={'vacancy-card'}>
            <div
                className={'vacancy-card__image'}
                style={{backgroundImage: `url(${thumbnailUrl})`}}
            />
            <div className={'vacancy-card-title-container'}>
                <a target="_blank" className={'vacancy-card-title-container__title'} href={link}>{title}</a>
            </div>
            <div className={'vacancy-card-content'}>
                <div className={'vacancy-card-content-info'}>
                    <a target="_blank" className={'vacancy-card-content-info__link'} href={link}>{location}</a>
                    <img className={'vacancy-card-content-info__image'} src={EllipseIcon} alt={'ellipse-icon'} />
                    <a target="_blank" className={'vacancy-card-content-info__link'} href={link}>{companyName}</a>
                </div>
                <img className={'vacancy-card-content__image'} src={ChangellengeArrowIcon} alt={'changellenge-arrow-icon'}/>
            </div>
            <SuggestFeedback handleGetFeedback={handleChangeIsRelevant} />
        </div>
    );
}

export default VacancyCard;