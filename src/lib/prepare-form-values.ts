import map from 'lodash/map';
import forEach from 'lodash/forEach';

export const prepareFormValues = (values: any)  => {
    const sectionIds = Object.getOwnPropertyNames(values);
    const results: { id: string; answer: any; }[] = [];
    
    forEach(sectionIds, sectionId => {
        forEach(values[sectionId], answerGroup => {
            forEach(Object.getOwnPropertyNames(answerGroup), answerId => {
                if (typeof answerGroup[answerId] === 'object') {
                    results.push({
                        id: answerId,
                        answer: answerGroup[answerId].from,
                    });
                    return;
                }
                results.push({
                    id: answerId,
                    answer: answerGroup[answerId],
                });
            });
        });
    })
    console.log('results', results);
    return results;
}