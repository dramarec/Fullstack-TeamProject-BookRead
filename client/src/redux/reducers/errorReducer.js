import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import { addNewBookRequest, addNewBookError } from '../actions/bookAction';
import {
    changeBookRequest,
    changeBookError,
} from '../actions/changeBookAction';
import {
    getUsersBooksRequest,
    getUsersBooksError,
} from '../actions/userLibraryAction';

import trainingActions from '../actions/trainingActions';

export const errorReducer = createReducer(null, {
    [authActions.regError]: (_, { payload }) => payload,
    [authActions.regRequest]: () => null,

    [authActions.logInError]: (_, { payload }) => payload,
    [authActions.logInRequest]: () => null,

    [authActions.logOutError]: (_, { payload }) => payload,
    [authActions.logOutRequest]: () => null,

    [addNewBookError]: (_, { payload }) => payload,
    [addNewBookRequest]: () => null,

    [changeBookError]: (_, { payload }) => payload,
    [changeBookRequest]: () => null,

    [getUsersBooksError]: (_, { payload }) => payload,
    [getUsersBooksRequest]: () => null,

    [trainingActions.newTrainingError]: (_, { payload }) => payload,
    [trainingActions.newTrainingRequest]: () => null,

    [trainingActions.addReadPagesError]: (_, { payload }) => payload,
    [trainingActions.addReadPagesRequest]: () => null,

    [trainingActions.getTrainingError]: (_, { payload }) => payload,
    [trainingActions.getTrainingRequest]: () => null,
});
