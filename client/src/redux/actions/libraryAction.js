import { createAction } from '@reduxjs/toolkit';

const getCurrentUserRequest = createAction('diary/getDayInfoRequest');
const getCurrentUserSuccess = createAction('diary/getDayInfoSuccess');
const getCurrentUserError = createAction('diary/getDayInfoError');

const libraryAction = {
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError
}

export default libraryAction