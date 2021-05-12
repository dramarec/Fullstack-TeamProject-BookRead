import { createAction } from '@reduxjs/toolkit';

const regRequest = createAction('auth/regRequest');
const regSuccess = createAction('auth/regSuccess');
const regError = createAction('auth/regError');

const logInRequest = createAction('auth/logInRequest');
const logInSuccess = createAction('auth/logInSuccess');
const logInError = createAction('auth/logInError');

const logOutRequest = createAction('auth/logOutRequest');
const logOutSuccess = createAction('auth/logOutSuccess');
const logOutError = createAction('auth/logOutError');

const logInGoogleRequest = createAction('auth/logInGoogleRequest');
const logInGoogleSuccess = createAction('auth/logInGoogleSuccess');
const logInGoogleError = createAction('auth/logInGoogleError');

const authActions = {
    regRequest,
    regSuccess,
    regError,
    logInRequest,
    logInSuccess,
    logInError,
    logOutRequest,
    logOutSuccess,
    logOutError,
    logInGoogleRequest,
    logInGoogleSuccess,
    logInGoogleError,
};

export default authActions;
