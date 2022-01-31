export type ElementTypeT =
    'SELECTOR'             |
    'INTERVAL_DATE_PICKER' |
    'TEXT_INPUT'           |
    'TEXT_AREA'

export interface IElement {
    id: number;
    title: string;
    description?: string;
    options?: Array<string>;
    placeholder?: string;
    type: ElementTypeT;
}