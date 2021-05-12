import api from '../../services/api';
import trainingActions from '../actions/trainingActions';

const operationAddNewTraining = (start, end, books) => async dispatch => {
    dispatch(trainingActions.newTrainingRequest());

    try {
        const response = await api.addTraining(start, end, books);
        dispatch(trainingActions.newTrainingSuccess(response));
    } catch (error) {
        console.log(error);
        dispatch(trainingActions.newTrainingError(error.message));
    }
};

const addReadPagesOperation = (date, pages) => async dispatch => {
    dispatch(trainingActions.addReadPagesRequest());

    try {
        const data = await api.addReadPages(date, pages);

        dispatch(trainingActions.addReadPagesSuccess(data));
    } catch (err) {
        dispatch(trainingActions.addReadPagesError(err.message));
        throw err;
    }
};

const getTrainingOperation = () => async dispatch => {
    dispatch(trainingActions.getTrainingRequest());

    try {
        const data = await api.getTraining();

        dispatch(trainingActions.getTrainingSuccess(data));
    } catch (err) {
        dispatch(trainingActions.getTrainingError(err.message));
        throw err;
    }
};

const trainingOperation = {
    operationAddNewTraining,
    addReadPagesOperation,
    getTrainingOperation,
};

export default trainingOperation;
