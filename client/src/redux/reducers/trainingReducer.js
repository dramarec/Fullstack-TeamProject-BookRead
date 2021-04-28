import { createReducer } from '@reduxjs/toolkit';
import trainingActions from '../actions/trainingAction';

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
        [trainingActions.addBookInTraining]: (state, action) => {
            console.log('action', action);
            return {
                ...state.books,
                books: [...state.books, action.payload.books],
            };
        },
        [trainingActions.removeBookFromTraining]: (state, action) => {
            console.log('action', action);
            return {
                ...state.books,
                books: [
                    ...state.books.filter(book => book._id !== action.payload),
                ],
            };
        },

        [trainingActions.setStartDateTraining]: (state, action) => {
            console.log('state', state);
            return {
                ...state,
                start: action.payload,
            };
        },
        [trainingActions.setEndDateTraining]: (state, action) => {
            console.log('state', state);
            return {
                ...state,
                end: action.payload,
            };
        },
    },
);

export default trainingReducer;
