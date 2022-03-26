export type InputTypesT =
    "TEXT_INPUT"           |
    "SELECTOR"             |
    "DATE_PICKER"          |
    "INTERVAL_DATE_PICKER" |
    "TEXT_AREA"

export interface IElementData {
    id: number;
    title: string;
    type: InputTypesT;
    options?: Array<string>;
    placeholder?: string;
    description?: string;
}

export interface ISectionData {
    id: number;
    name: string;
    buttonTitle: string;
    elements: Array<IElementData>;
}

export interface IBlockData {
    id: number;
    name: string;
    sections: Array<ISectionData>;
}