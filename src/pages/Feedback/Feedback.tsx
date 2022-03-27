import React, {useEffect} from "react";
import './Feedback.scss';
import Fireworks from "fireworks/lib/react";
import Button from "../../components/styled-components/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
export const Feedback = () => {
    const state = useLocation().state as {sessionId: number};

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
                <a className={'feedback-page-content__link'} href={`http://localhost:3000/suggest/${state?.sessionId}`}>{`http://localhost:3000/suggest/${state?.sessionId}`}</a>
                {/* <textarea />
                <Button label={'Отправить фидбэк'} backgroundColor={'red'} /> */}
            </div>
        </div>
    )
}
export default Feedback;