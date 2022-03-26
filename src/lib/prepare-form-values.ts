import map from 'lodash/map';

export const prepareFormValues = (values: any)  => {
    const questionIds = Object.getOwnPropertyNames(values);
    return map(questionIds, (questionId) => {
        if (typeof values[questionId] === 'object') {
            return {id: questionId, answer: [values[questionId]['from'], values[questionId]['to']]};
        }

        return {id: Number(questionId), answer: values[questionId]};
    });
}