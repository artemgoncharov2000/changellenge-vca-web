// TODO: прописать тип для data
import forEach from "lodash/forEach";
import { IBlockData } from "../types/form";

export type InitialValuesT = {
    [sessionId: number]: Array<{
        [elemId: number]: string
    }>
}

export const getInitialValues = (data: Array<IBlockData>) => {
    const initialValues: InitialValuesT = {}
    forEach(data, block => {
        const { sections } = block;
        forEach(sections, section => {
            const { elements, id: sectionId } = section;
            const elementData: {[elemId: number]: string} = {};
            forEach(elements, element => {
                const { id, type } = element;

                
                // if (type === 'INTERVAL_DATE_PICKER') {
                //     initialValues[String(id)] = {
                //         from: new Date(),
                //         to: new Date(),
                //     }
                //     return;
                // }
                // initialValues[String(id)] = '';
                elementData[id] = '';
            })
            initialValues[sectionId] = [elementData];
        })
    })
    
    return initialValues;
}