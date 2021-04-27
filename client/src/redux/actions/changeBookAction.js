import { createAction } from '@reduxjs/toolkit';

export const changeBookRequest = createAction('@book/changeBookRequest');
export const changeBookSuccess = createAction('@book/changeBookSuccess');
export const changeBookError = createAction('@book/changeBookError');

