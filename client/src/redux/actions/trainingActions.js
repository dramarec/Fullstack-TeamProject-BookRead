import { createAction } from '@reduxjs/toolkit';

const newTrainingRequest = createAction('@training/newTrainingRequest');
const newTrainingSuccess = createAction('@training/newTrainingSuccess');
const newTrainingError = createAction('@training/newTrainingError');

const getTrainingRequest = createAction('@training/getTrainingRequest');
const getTrainingSuccess = createAction('@training/getTrainingSuccess');
const getTrainingError = createAction('@training/getTrainingError');

const addReadPagesRequest = createAction('@training/addReadPagesRequest');
const addReadPagesSuccess = createAction('@training/addReadPagesSuccess');
const addReadPagesError = createAction('@training/addReadPagesError');

const clearTraining = createAction('@training/clearTraining');

const trainingActions = {
    newTrainingRequest,
    newTrainingSuccess,
    newTrainingError,

    getTrainingRequest,
    getTrainingSuccess,
    getTrainingError,

    addReadPagesRequest,
    addReadPagesSuccess,
    addReadPagesError,

    clearTraining,
};
export default trainingActions;
