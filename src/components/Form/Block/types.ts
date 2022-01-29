import {ISection} from "../Section/types";

export interface IBlockProps {
    id: number;
    name: string;
    sections: Array<ISection>
    goNext: () => void;
    goBack: () => void;
    submitForm?: () => void;
    isLast?: boolean;
}