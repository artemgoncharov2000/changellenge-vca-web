import {CoursesT, SuggestTypesEnum} from "../types/suggest";
import {useEffect, useState} from "react";
import {api} from "../lib/api/api-client";

const useGetCourses = (page: number): CoursesT | null => {
    const [courses, setCourses] = useState<CoursesT | null>(null);
    useEffect(() => {
        api.getSuggestData(SuggestTypesEnum.courses, page)
            .then(data => setCourses(data))
            .catch(err => console.log(`Failed to fetch courses: ${err}`));
    }, [page]);

    return courses;
}

export default useGetCourses;