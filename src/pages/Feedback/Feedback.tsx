import React, {useEffect} from "react";
import './Feedback.scss';
import Fireworks from "fireworks/lib/react";
import Button from "../../components/styled-components/Button/Button";
export const Feedback = () => {

    let fxProps = {
        count: 10,
        interval: 1200,
        colors: ['#47B881', '#1070CA', '#00783E'],
        calc: (props: any, i: number) => ({
            ...props,
            x: (window.innerWidth / 3) * 2 - ((i + 1) % 5) * 100,
            y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
        })
    }

    return (
        <div className={'feedback-page'}>
            {/*<Fireworks {...fxProps} />*/}
            <div className={'feedback-page-content'}>
                <div>{"Форма отправлена!"}</div>
                <div>{"Перейдите по ссылке, чтобы посмотреть результаты:"}</div>
                <a className={'feedback-page-content__link'} href={'localhost:3001/suggest/123123123'}>{'localhost:3001/suggest/123123123'}</a>
                <textarea />
                <Button label={'Отправить форму'} backgroundColor={'red'} />
                {/*<div className={"secret-label"}>{"(А Артем – лучший фронтендер!!!)"}</div>*/}
            </div>
        </div>
    )
}
export default Feedback;