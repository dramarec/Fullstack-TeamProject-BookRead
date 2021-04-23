import { createReducer } from '@reduxjs/toolkit';
import {
  addNewBookRequest,
  addNewBookSuccess,
  addNewBookError,
} from '../actions/bookAction';

const initialState = {
  books: [],
};

const bookReduser = createReducer(initialState, {
  [addNewBookRequest]: (state, action) => ({
    ...state,
    isLoading: true,
  }),
  [addNewBookSuccess]: (state, action) => ({
    ...state,
    books: [...state.books, action.payload],
    isLoading: false,
  }),
  [addNewBookError]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
});

export { bookReduser };
