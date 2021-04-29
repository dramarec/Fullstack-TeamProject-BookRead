const trainingBooksList = state => state.training.books;
const getStartDate = state => state.training.start;
const getEndDate = state => state.training.end;

const trainingSelector = {
    trainingBooksList,
    getStartDate,
    getEndDate,
};

export default trainingSelector;
