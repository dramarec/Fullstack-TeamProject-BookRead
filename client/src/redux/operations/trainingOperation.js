import api from '../../services/api';
import {
    addNewTrainingBook,
    addNewTrainingSuccess,
    addNewTrainingError,
} from '../actions/trainingAction';

const operationAddNewBook = training => async dispatch => {
    dispatch(addNewTrainingBook());
    try {
        const response = await api.addTraining(training);
        console.log('response', response);
        dispatch(addNewTrainingSuccess(response));
    } catch (error) {
        dispatch(addNewTrainingError(error));
    }
};

export { operationAddNewBook };
