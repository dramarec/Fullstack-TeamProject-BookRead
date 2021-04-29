import { createAction } from '@reduxjs/toolkit';

const addBookInTraining = createAction('@training/addBookInTraining');
const removeBookFromTraining = createAction('@training/removeBookFromTraining');

const setStartDateTraining = createAction('@training/setStartDateTraining');
const setEndDateTraining = createAction('@training/setEndDateTraining');

const newTrainingRequest = createAction('@training/newTrainingRequest');
const newTrainingSuccess = createAction('@training/newTrainingSuccess');
const newTrainingError = createAction('@training/newTrainingError');

const getTrainingRequest = createAction('@training/getTrainingRequest');
const getTrainingSuccess = createAction('@training/getTrainingSuccess');
const getTrainingError = createAction('@training/getTrainingError');

const trainingActions = {
    addBookInTraining,
    removeBookFromTraining,

    newTrainingRequest,
    newTrainingSuccess,
    newTrainingError,

    getTrainingRequest,
    getTrainingSuccess,
    getTrainingError,

    setStartDateTraining,
    setEndDateTraining,
};
export default trainingActions;
