import {IElementProps} from "../Element/types";
import {ISectionData} from "../../../types/form";

export interface ISectionProps {
    sectionData: ISectionData;
    updateInitialValues: (sessionId: number, data: {[elemId: number]: string}) => void;
    // id: number;
    // name: string;
    // buttonTitle?: 'string';
    // elements: Array<IElementProps>;
}