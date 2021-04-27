import api from '../../services/api';
import { addNewTrainingBook } from '../actions/trainingAction';

const operationAddNewBook = training => async dispatch => {
    dispatch(addNewTrainingBook());
    try {
        const response = await api.addTraining(training);
    } catch (error) {
        dispatch(addNewTrainingBook(error));
    }
};

export { operationAddNewBook };
