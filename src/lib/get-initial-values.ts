// TODO: прописать тип для data
import forEach from "lodash/forEach";

export const getInitialValues = (data: any) => {
    const initialValues: any = {}
    forEach(data, block => {
        const { sections } = block;
        forEach(sections, section => {
            const { elements, id: sectionId, isArray } = section;
            if (isArray) {
                initialValues[sectionId] = [];
            }
            forEach(elements, element => {
                const { id, type } = element;
                if (isArray) {
                    return;
                }

                if (type === 'INTERVAL_DATE_PICKER') {
                    initialValues[String(id)] = {
                        from: new Date(),
                        to: new Date(),
                    }
                    return;
                }
                initialValues[String(id)] = '';
            })
        })
    })
    return initialValues;
}