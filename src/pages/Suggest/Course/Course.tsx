import React, { FC } from 'react';
import map from 'lodash/map';
import CourseCard from "./CourseCard/CourseCard";
import './Course.scss';
import { useGetSuggests } from '../../../hooks/use-get-suggests';
import { CoursesT, SuggestTypesEnum } from '../../../types/suggest';

const Course: FC = () => {
    const {suggests: courses, isError, isLoading} = useGetSuggests<CoursesT>(SuggestTypesEnum.courses, 0);
    
    const getPageState = () => {
        if (isLoading) {
            return <p>{"Загружаем данные..."}</p>;
        }
        if (isError) {
            return <p>{"Ошибка загрузки"}</p>;
        }
        if (courses) {
            return (
                <>
                    <div className={'course-tab__content'}>
                        {map(courses, (course) =>
                            <CourseCard
                                id={course.id}
                                key={course.id}
                                thumbnailUrl={course.thumbnailUrl}
                                title={course.title}
                                subtitle={course.subtitle}
                                link={course.link}
                            />
                        )}
                    </div>
                    <button type="button" className={'course-tab__button'}>{"Загрузить еще"}</button>
                </>
            )
        }
    }

    return (
        <div className={'course-tab'}>
            {getPageState()}
        </div>
    );
};

export default Course;