import {IElement} from "../Element/types";

export interface ISection {
    id: number;
    name: string;
    buttonTitle?: 'string';
    elements: Array<IElement>;
}