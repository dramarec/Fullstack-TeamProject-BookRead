import { createAction } from '@reduxjs/toolkit';

const addNewTrainingBook = createAction('@training/addNewTrainingBook');
const getTrainingBook = createAction('@training/getTrainingBook');

export { addNewTrainingBook, getTrainingBook };
