import { combineReducers, createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import { getUsersBooksSuccess } from '../actions/userLibraryAction';
import trainingActions from '../actions/trainingActions';

const initialState = {
    name: '',
    email: '',
    books: [],
    training: null,
};

const userReducer = createReducer(initialState, {
    [authActions.logInSuccess]: (_, { payload }) => ({
        name: payload.user.username,
        email: payload.user.email,
        books: payload.user.books,
        training: payload.user.training,
    }),
    [authActions.logInGoogleSuccess]: (_, { payload }) => ({
        name: payload.user.username,
        email: payload.user.email,
        books: payload.user.books,
        training: payload.user.training,
    }),
    [getUsersBooksSuccess]: (_, { payload }) => ({
        name: payload.username,
        email: payload.email,
        books: payload.books,
        training: payload.training,
    }),
    [trainingActions.newTrainingSuccess]: (state, { payload }) => ({
        ...state,
        training: payload._id,
    }),
    [authActions.logOutSuccess]: () => initialState,
});

const tokenReducer = createReducer(null, {
    [authActions.logInSuccess]: (_, { payload }) => payload.token,
    [authActions.logInGoogleSuccess]: (_, { payload }) => payload.token,
    [authActions.logOutSuccess]: () => null,
});

const authReducer = combineReducers({
    token: tokenReducer,
    user: userReducer,
});

export default authReducer;
