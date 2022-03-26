import React from "react";
import './Lading.scss';
import {useNavigate} from "react-router-dom";
const Landing = () => {

    const navigate = useNavigate();

    const onClick = () => {
        navigate('/form')
    }

    return (
        <div className={'landing-page'}>
            <div className={'landing-page-heading'}>
                <h2 className={'landing-page-heading__title'}>{"Узнай, что делать, чтобы устроиться на работу"}</h2>
            </div>
            <div className={'landing-page-action-block'}>
                <div className={'landing-page-action-block-image-container'}>
                    <img className={'landing-page-action-block-image-container__image'} src={'https://cdn.healthnwell.com/healthnwell/wp-content/uploads/2018/04/4c19f384-f4c2-45a7-bab7-132ece2aaf01.jpg'}/>
                </div>
                <div className={'landing-page-action-block-content'}>
                    <h2 className={'landing-page-action-block-content__title'}>{"Changellenge >> Start Career"}</h2>
                    <p className={'landing-page-action-block-content__description'}>
                        {"Заполни анкету и получи рекомендации по построению твоей карьеры от джуна до CEO"}
                    </p>
                    <button className={'landing-page-action-block-content__button'} onClick={onClick}>{"Заполнить анкету"}</button>
                </div>
            </div>
        </div>
    )
}

export default Landing;