import api from '../../services/api';
import trainingActions from '../actions/trainingAction';

const operationAddNewTraining = (start, end, books) => async dispatch => {
    dispatch(trainingActions.newTrainingRequest());
    try {
        const response = await api.addTraining(start, end, books);
        console.log('response', response);
        dispatch(trainingActions.newTrainingSuccess(response));
        dispatch(getTrainingOperation());
    } catch (error) {
        dispatch(trainingActions.newTrainingError(error));
    }
};

const getTrainingOperation = () => async dispatch => {
    dispatch(trainingActions.getTrainingRequest());

    try {
        const data = await api.getTraining();
        console.log(data, 'DATA TRAINING');
        dispatch(trainingActions.getTrainingSuccess(data));
    } catch (err) {
        dispatch(trainingActions.getTrainingError(err.message));
    }
};

const trainingOperation = { operationAddNewTraining, getTrainingOperation };

export default trainingOperation;
