// TODO: прописать тип для data
import forEach from "lodash/forEach";
import { IBlockData } from "../types/form";

export const getInitialValues = (data: Array<IBlockData>) => {
    const initialValues: any = {}
    forEach(data, block => {
        const { sections } = block;
        forEach(sections, section => {
            const { elements, id: sectionId } = section;
            const elementData: any = {};
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