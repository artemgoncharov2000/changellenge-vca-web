import map from 'lodash/map';
import forEach from 'lodash/forEach';

export const prepareFormValues = (values: any)  => {
    const sectionIds = Object.getOwnPropertyNames(values);
    const results: { id: string; answer: any; }[] = [];
    console.log(values);
    
    forEach(sectionIds, sectionId => {
        forEach(values[sectionId], answerGroup => {
            const answerIds = Object.getOwnPropertyNames(answerGroup);
            forEach(answerIds, answerId => {
                results.push({
                    id: answerId,
                    answer: answerGroup[answerId],
                })
            })
        });
    })
    console.log(results);
    
    // return map(questionIds, (questionId) => {
    //     if (typeof values[questionId] === 'object') {
    //         return {id: questionId, answer: [values[questionId]['from'], values[questionId]['to']]};
    //     }

    //     return {id: Number(questionId), answer: values[questionId]};
    // });
}