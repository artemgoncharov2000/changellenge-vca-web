import React, { FC } from 'react';
import map from 'lodash/map';
import CourseCard from "./CourseCard/CourseCard";
import TestCourseImage from '../../../assets/local-images/CL_-03 2.png';
import './Course.scss';
const vacancies = [
    {
        imageUrl: 'https://www.idownloadblog.com/wp-content/uploads/2020/10/Resonance_Blue_Light-428w-926h@3xiphone.png',
        title: 'Профессия финансового аналитика',
        subtitle: 'Образовательная программа для тех, кто хочет стать востребованным специалистом и принимать решения, благодаря которым бизнес сможет рассчитывать на эффективность и прибыльность. Вы научитесь анализировать данные, составлять финансовые модели и прогнозировать развитие компании.',
    },
    {
        imageUrl: 'https://www.idownloadblog.com/wp-content/uploads/2020/10/Resonance_Blue_Light-428w-926h@3xiphone.png',
        title: 'Профессия финансового аналитика',
        subtitle: 'Образовательная программа для тех, кто хочет стать востребованным специалистом и принимать решения, благодаря которым бизнес сможет рассчитывать на эффективность и прибыльность. Вы научитесь анализировать данные, составлять финансовые модели и прогнозировать развитие компании.',
    },
    {
        imageUrl: 'https://www.idownloadblog.com/wp-content/uploads/2020/10/Resonance_Blue_Light-428w-926h@3xiphone.png',
        title: 'Профессия финансового аналитика',
        subtitle: 'Образовательная программа для тех, кто хочет стать востребованным специалистом и принимать решения, благодаря которым бизнес сможет рассчитывать на эффективность и прибыльность. Вы научитесь анализировать данные, составлять финансовые модели и прогнозировать развитие компании.',
    },
    {
        imageUrl: 'https://www.idownloadblog.com/wp-content/uploads/2020/10/Resonance_Blue_Light-428w-926h@3xiphone.png',
        title: 'Профессия финансового аналитика',
        subtitle: 'Образовательная программа для тех, кто хочет стать востребованным специалистом и принимать решения, благодаря которым бизнес сможет рассчитывать на эффективность и прибыльность. Вы научитесь анализировать данные, составлять финансовые модели и прогнозировать развитие компании.',
    },
]
const Course: FC = () => {

    return (
        <div className={'course-tab'}>
            <div className={'course-tab__content'}>
                {map(vacancies, (vacancy, index) =>
                    <CourseCard
                        key={index}
                        imageUrl={vacancy.imageUrl}
                        title={vacancy.title}
                        subtitle={vacancy.subtitle}
                    />
                )}
            </div>
            <button type="button" className={'course-tab__button'}>{"Загрузить еще"}</button>
        </div>
    );
};

export default Course;