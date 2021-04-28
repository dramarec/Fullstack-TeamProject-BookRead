import { combineReducers, createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import { getUsersBooksSuccess } from '../actions/userLibraryAction';

const initialState = {
  name: '',
  email: '',
  books: [],
  training: {},
};

const userReducer = createReducer(initialState, {
  [authActions.logInSuccess]: (_, { payload }) => ({
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
  [authActions.logOutSuccess]: () => initialState,
});

const tokenReducer = createReducer(null, {
  [authActions.logInSuccess]: (_, { payload }) => payload.token,
  [authActions.logOutSuccess]: () => null,
});

const authReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
});

export default authReducer;
