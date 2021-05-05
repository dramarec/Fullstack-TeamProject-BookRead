const trainingBooksList = state => state.training.books;
const getStartDate = state => state.training.start;
const getEndDate = state => state.training.end;
const getTraining = state => state.training;
const getStatistics = state => state.training.active.progress;

const trainingSelector = {
    trainingBooksList,
    getStartDate,
    getEndDate,
    getTraining,
    getStatistics,
};

export default trainingSelector;
