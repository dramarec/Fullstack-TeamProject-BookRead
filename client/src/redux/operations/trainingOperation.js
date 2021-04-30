import api from '../../services/api';
import trainingActions from '../actions/trainingAction';

const operationAddNewTraining = (start, end, books) => async dispatch => {
    dispatch(trainingActions.newTrainingRequest());

    try {
        const response = await api.addTraining(start, end, books);
        console.log('response', response);
        dispatch(trainingActions.newTrainingSuccess(response));
    } catch (error) {
        dispatch(trainingActions.newTrainingError(error));
    }
};

const addReadPagesOperation = (date, pages) => async dispatch => {
    dispatch(trainingActions.addReadPagesRequest());

    try {
        const { training } = await api.addReadPages(date, pages);
        console.log(training, 'RES DATA PATCH TRAINING');
        dispatch(trainingActions.addReadPagesSuccess(training));
        dispatch(getTrainingOperation());
    } catch (err) {
        dispatch(trainingActions.addReadPagesError(err.maessage));
    }
};

const getTrainingOperation = () => async dispatch => {
    dispatch(trainingActions.getTrainingRequest());

    try {
        const data = await api.getTraining();

        dispatch(trainingActions.getTrainingSuccess(data));
    } catch (err) {
        dispatch(trainingActions.getTrainingError(err.message));
    }
};

const trainingOperation = {
    operationAddNewTraining,
    addReadPagesOperation,
    getTrainingOperation,
};

export default trainingOperation;
