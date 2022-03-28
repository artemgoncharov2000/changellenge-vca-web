import React from "react";
import './Feedback.scss';
import { useLocation, useNavigate } from "react-router-dom";

export const Feedback: React.FC = () => {
    const state = useLocation().state as {sessionId: number};
    const link = `http://changellege-vca.herokuapp.com/suggest/${state?.sessionId}`;
    
    return (
        <div className={'feedback-page'}>
            <div className={'feedback-page-content'}>
                <div data-test-id="feedback-title">{"Форма отправлена!"}</div>
                <div data-test-id="feedback-subtitle">{"Перейдите по ссылке, чтобы посмотреть результаты:"}</div>
                <a className={'feedback-page-content__link'} href={link} data-test-id="feedback-link">{link}</a>
                {/* <textarea />
                <Button label={'Отправить фидбэк'} backgroundColor={'red'} /> */}
            </div>
        </div>
    )
}
export default Feedback;