import { createAction } from '@reduxjs/toolkit';

const addBookInTraining = createAction('@training/addBookInTraining');
const removeBookFromTraining = createAction('@training/removeBookFromTraining');

const setStartDateTraining = createAction('@training/setStartDateTraining');
const setEndDateTraining = createAction('@training/setEndDateTraining');

const newTrainingRequest = createAction('@training/newTrainingRequest');
const newTrainingSuccess = createAction('@training/newTrainingSuccess');
const newTrainingError = createAction('@training/newTrainingError');

const trainingActions = {
    addBookInTraining,
    removeBookFromTraining,

    newTrainingRequest,
    newTrainingSuccess,
    newTrainingError,

    setStartDateTraining,
    setEndDateTraining,
};
export default trainingActions;
