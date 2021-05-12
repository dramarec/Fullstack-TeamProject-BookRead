import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import trainingActions from '../actions/trainingActions';
import {
    addNewBookRequest,
    addNewBookSuccess,
    addNewBookError,
} from '../actions/bookAction';
import {
    changeBookRequest,
    changeBookSuccess,
    changeBookError,
} from '../actions/changeBookAction';
import {
    getUsersBooksRequest,
    getUsersBooksSuccess,
    getUsersBooksError,
} from '../actions/userLibraryAction';

export const loadingReducer = createReducer(false, {
    [authActions.logInRequest]: () => true,
    [authActions.logInSuccess]: () => false,
    [authActions.logInError]: () => false,

    [authActions.logOutRequest]: () => true,
    [authActions.logOutSuccess]: () => false,
    [authActions.logOutError]: () => false,

    [addNewBookRequest]: () => true,
    [addNewBookSuccess]: () => false,
    [addNewBookError]: () => false,

    [changeBookRequest]: () => true,
    [changeBookSuccess]: () => false,
    [changeBookError]: () => false,

    [getUsersBooksRequest]: () => true,
    [getUsersBooksSuccess]: () => false,
    [getUsersBooksError]: () => false,

    [trainingActions.newTrainingRequest]: () => true,
    [trainingActions.newTrainingSuccess]: () => false,
    [trainingActions.newTrainingError]: () => false,

    [trainingActions.addReadPagesRequest]: () => true,
    [trainingActions.addReadPagesSuccess]: () => false,
    [trainingActions.addReadPagesError]: () => false,

    [trainingActions.getTrainingRequest]: () => true,
    [trainingActions.getTrainingSuccess]: () => false,
    [trainingActions.getTrainingError]: () => false,
});
