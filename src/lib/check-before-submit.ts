import { IBlockData } from "../types/form";

export const checkValues = (values: any, currentBlock: IBlockData | undefined): boolean => {
    if (!currentBlock) {
        return false;
    }
    const sectionIds = Object.getOwnPropertyNames(values);
    console.log(currentBlock);
    
    const includedSections = currentBlock.sections.map(section => String(section.id));
    
    for (const sectionId of sectionIds) {
        if (!includedSections.includes(sectionId)) {
            console.log(includedSections);
            
            continue;
        }
        for (const answerGroup of values[sectionId]) {
            for (const answerId of Object.getOwnPropertyNames(answerGroup)) {
                if (typeof answerGroup[answerId] === 'object') {
                    if (!answerGroup[answerId].from) {
                        return false;
                    } else {
                        continue;
                    }
                }
                if (!answerGroup[answerId]) {
                    return false;
                }
            }
        }
    }
    return true;
}