import { createReducer } from '@reduxjs/toolkit';
import {
  addNewBookRequest,
  addNewBookSuccess,
  addNewBookError,
} from '../actions/bookAction';

const initialState = {
  willRead: [],
};

const bookReduser = createReducer(
  { ...initialState },
  {
    [addNewBookRequest]: (state, action) => ({
      ...state,
      isLoading: true,
    }),
    [addNewBookSuccess]: (state, action) => ({
      ...state,
      willRead: [...state.willRead, action.payload.data.newBook],
      isLoading: false,
    }),
    [addNewBookError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
);

export { bookReduser };
