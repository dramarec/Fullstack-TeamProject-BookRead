import { createAction } from '@reduxjs/toolkit';

const addNewTrainingBook = createAction('@training/addNewTrainingBook');
const addNewTrainingSuccess = createAction('@training/addNewTrainingSuccess');
const addNewTrainingError = createAction('@training/addNewTrainingError');
const getTrainingBook = createAction('@training/getTrainingBook');
const deleteTrainingBook = createAction('@training/deleteTrainingBook');

export {
    addNewTrainingBook,
    addNewTrainingSuccess,
    addNewTrainingError,
    getTrainingBook,
    deleteTrainingBook,
};
