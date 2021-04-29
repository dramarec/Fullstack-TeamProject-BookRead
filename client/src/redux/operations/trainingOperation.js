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

const trainingOperation = { operationAddNewTraining };

export default trainingOperation;
