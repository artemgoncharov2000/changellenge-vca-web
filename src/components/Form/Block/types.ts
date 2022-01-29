import {ISection} from "../Section/types";

export interface IBlock {
    id: number;
    name: string;
    sections: Array<ISection>
}