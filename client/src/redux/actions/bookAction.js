import { createAction } from '@reduxjs/toolkit';

const addNewBookRequest = createAction('@book/addNewBookRequest');
const addNewBookSuccess = createAction('@book/addNewBookSuccess');
const addNewBookError = createAction('@book/addNewBookError');

export { addNewBookRequest, addNewBookSuccess, addNewBookError };
