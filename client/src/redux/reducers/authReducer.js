import { combineReducers, createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';

const initialState = {
  name: '',
  email: '',
  books: [],
  training: {},
  isAuth: false,
};

const userReducer = createReducer(initialState, {
  [authActions.logInSuccess]: (_, { payload }) => ({
    name: payload.user.username,
    email: payload.user.email,
    books: payload.user.books,
    training: payload.user.training,
    isAuth: true,
  }),
  //   [authActions.getCurrentUserSuccess]: (_, { payload }) => ({
  //     id: payload.id,
  //     name: payload.name,
  //     email: payload.email,
  //     books: payload.books,
  //     training: payload.training,
  //   }),
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
