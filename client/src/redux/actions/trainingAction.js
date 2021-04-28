import { createAction } from '@reduxjs/toolkit';

const addBookInTraining = createAction('@training/addBookInTraining');
const removeBookFromTraining = createAction('@training/removeBookFromTraining');

const setStartDateTraining = createAction('@training/setStartDateTraining');
const setEndDateTraining = createAction('@training/setEndDateTraining');

const addNewTrainingRequest = createAction('@training/addNewTrainingRequest');
const addNewTrainingSuccess = createAction('@training/addNewTrainingSuccess');
const addNewTrainingError = createAction('@training/addNewTrainingError');

const trainingActions = {
    addBookInTraining,
    removeBookFromTraining,

    addNewTrainingRequest,
    addNewTrainingSuccess,
    addNewTrainingError,

    setStartDateTraining,
    setEndDateTraining,
};
export default trainingActions;
