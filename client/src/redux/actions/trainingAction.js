import { createAction } from '@reduxjs/toolkit';

const addNewTrainingBook = createAction('@training/addNewTrainingBook');
const getTrainingBook = createAction('@training/getTrainingBook');
const deleteTrainingBook = createAction('@training/deleteTrainingBook');

export { addNewTrainingBook, getTrainingBook, deleteTrainingBook };
