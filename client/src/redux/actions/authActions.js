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
};

export default authActions;
