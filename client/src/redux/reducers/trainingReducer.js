import { createReducer } from '@reduxjs/toolkit';
import { addNewTrainingBook, getTrainingBook } from '../actions/trainingAction';

const initialState = {
  start: '',
  end: '',
  duration: 0,
  pagesReadPerDay: 0,
  books: [
    {
      _id: '60845e4e24523d1ccdc66756',
      title: 'Harry Potter',
      author: 'J. K. Rowling',
      year: 1997,
      numberOfPages: 123,
    },
    {
      _id: '6084000dc4cfc1a5455ab0ea',
      title: 'Жизнь и ловля пресноводных рыб',
      author: 'Сабанеев Л.П.',
      year: 1875,
      numberOfPages: 472,
    },
    {
      _id: '608448aa0733e1b53cdad37c',
      title: 'Как разговаривать с мудаками',
      author: 'Марк Гоулстон',
      year: 2016,
      numberOfPages: 272,
    },
    {
      _id: '60845e7c24523d1ccdc66758',
      title: 'Romero & Julieta',
      author: 'J. K. Rowling',
      year: 1997,
      numberOfPages: 123,
    },
  ],
};

const trainingReducer = createReducer(
  { ...initialState },
  {
    [addNewTrainingBook]: (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
    }),

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
