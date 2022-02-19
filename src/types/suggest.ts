export enum SuggestTypesEnum {
    vacancies = "vacancies",
    events = "events",
    courses = "courses",
    articles = "articles"
}

export interface IVacancy {
    id: number,
    thumbnailUrl: string;
    title: string;
    location: string;
    companyName: string;
    link: string;
}

export type VacanciesT = Array<IVacancy>;

export interface IEvent {
    id: number,
    thumbnailUrl: string;
    title: string;
    subtitle: string;
    date: string;
    link: string;
}

export type EventsT = Array<IEvent>;

export interface ICourse {
    id: number;
    thumbnailUrl: string;
    title: string;
    subtitle: string;
    link: string;
}

export type CoursesT = Array<ICourse>;

export interface IArticle {
    id: number;
    thumbnailUrl: string;
    title: string;
    subtitle: string;
    description: string;
    link: string;
}

export type ArticlesT = Array<IArticle>;