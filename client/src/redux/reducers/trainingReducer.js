import { createReducer } from '@reduxjs/toolkit';
import { addNewTrainingBook, getTrainingBook } from '../actions/trainingAction';

const initialState = {
  start: '',
  end: '',
  duration: 0,
  pagesReadPerDay: 0,
  books: [],
};

const trainingReducer = createReducer(
  { ...initialState },
  {
    [addNewTrainingBook]: (state, action) => {
      console.log('action', action);
      return {
        ...state,
        books: [...state.books, action.payload.books],
      };
    },

    [getTrainingBook]: (state, action) => {
      console.log('state', state);
      return {
        ...state,
        books: [...action.payload],
      };
    },
  },
);

export default trainingReducer;
