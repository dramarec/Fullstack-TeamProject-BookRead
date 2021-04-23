import { createAction } from '@reduxjs/toolkit';

const postBookRequest = createAction('@book/postBookRequest');
const postBookSuccess = createAction('@book/postBookSuccess');
const postBookError = createAction('@book/postBookError');

export { postBookRequest, postBookSuccess, postBookError };
