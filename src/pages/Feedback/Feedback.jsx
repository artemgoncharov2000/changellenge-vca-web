import React, {useEffect} from "react";
import './Feedback.scss';
import Fireworks from "fireworks/lib/react";
export const Feedback = () => {

    let fxProps = {
        count: 10,
        interval: 1200,
        colors: ['#47B881', '#1070CA', '#00783E'],
        calc: (props, i) => ({
            ...props,
            x: (window.innerWidth / 3) * 2 - ((i + 1) % 5) * 100,
            y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
        })
    }

    return (
        <div className={'feedback-page'}>
            <Fireworks {...fxProps} />
            <div className={'feedback-page__content'}>
                <div>{"Форма отправлена!"}</div>
                <div>{"Вы молодец!"}</div>
                <div className={"secret-label"}>{"(А Артем – лучший фронтендер!!!)"}</div>
            </div>
        </div>
    )
}
export default Feedback;