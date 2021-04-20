import { createAction } from '@reduxjs/toolkit';

const signUpRequest = createAction('auth/signUpRequest');
const signUpSuccess = createAction('auth/signUpSuccess');
const signUpError = createAction('auth/signUpError');

const signInRequest = createAction('auth/signInRequest');
const signInSuccess = createAction('auth/signInSuccess');
const signInError = createAction('auth/signInError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const getNewTokenRequest = createAction('auth/getNewTokenRequest');
const getNewTokenSuccess = createAction('auth/getNewTokenSuccess');
const getNewTokenError = createAction('auth/getNewTokenError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

const authActions = {
    signUpRequest,
    signUpSuccess,
    signUpError,

    signInRequest,
    signInSuccess,
    signInError,

    getNewTokenRequest,
    getNewTokenSuccess,
    getNewTokenError,

    logoutRequest,
    logoutSuccess,
    logoutError,

    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError,
};

export default authActions;