import { createAction } from '@reduxjs/toolkit';

export const changeBookRequest = createAction('userLibrary/changeBookRequest');
export const changeBookSuccess = createAction('userLibrary/changeBookSuccess');
export const changeBookError = createAction('userLibrary/changeBookError');

