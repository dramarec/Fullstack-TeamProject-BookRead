const trainingBooksList = state => state.training.books;
const getStartDate = state => state.training.start;
const getEndDate = state => state.training.end;
const getTraining = state => state.training;

const trainingSelector = {
    trainingBooksList,
    getStartDate,
    getEndDate,
    getTraining,
};

export default trainingSelector;
