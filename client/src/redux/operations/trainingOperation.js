import api from '../../services/api';
import trainingActions from '../actions/trainingAction';

const operationAddNewBook = (start, end, books) => async dispatch => {
    dispatch(trainingActions.addNewTrainingRequest());
    try {
        const response = await api.addTraining(start, end, books);
        console.log('response', response);
        dispatch(trainingActions.addNewTrainingSuccess(response));
    } catch (error) {
        dispatch(trainingActions.addNewTrainingError(error));
    }
};

const trainingOperation = { operationAddNewBook };

export default trainingOperation;
