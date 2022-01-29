import map from 'lodash/map';

export const prepareFormValues = (values: any)  => {
    const questionIds = Object.getOwnPropertyNames(values);
    return map(questionIds, (questionId) => {
        if (typeof values[questionId] === 'object') {
            return {questionId: questionId, answer: [values[questionId]['from'], values[questionId]['to']]};
        }

        return {questionId: questionId, answer: values[questionId]};
    });
}