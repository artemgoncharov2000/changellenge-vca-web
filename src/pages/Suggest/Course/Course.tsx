import React, { FC } from 'react';
import map from 'lodash/map';
import CourseCard from "./CourseCard/CourseCard";
import './Course.scss';
import useGetCourses from "../../../hooks/use-get-courses";

const Course: FC = () => {

    const courses = useGetCourses(0);

    return (
        <div className={'course-tab'}>
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
        </div>
    );
};

export default Course;