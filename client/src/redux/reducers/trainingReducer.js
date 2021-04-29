import { createReducer } from '@reduxjs/toolkit';
import trainingActions from '../actions/trainingAction';

const initialState = {
    start: '',
    end: '',
    books: [],
};

const trainingReducer = createReducer(
    { ...initialState },
    {
        [trainingActions.addBookInTraining]: (state, action) => {
            return {
                ...state.books,
                books: [...state.books, action.payload.books],
            };
        },

        [trainingActions.removeBookFromTraining]: (state, action) => {
            return {
                ...state.books,
                books: [
                    ...state.books.filter(book => book._id !== action.payload),
                ],
            };
        },

        [trainingActions.setStartDateTraining]: (state, action) => {
            // console.log(
            //     '=> action => trainingActions.setStartDateTraining =>',
            //     action.payload,
            // );
            return {
                ...state,
                start: action.payload,
            };
        },
        [trainingActions.setEndDateTraining]: (state, { payload }) => {
            // console.log(
            //     'action trainingActions.setEndDateTraining =>',
            //     action.payload,
            // );
            return {
                ...state,
                end: payload,
            };
        },

        [trainingActions.newTrainingRequest]: (state, { payload }) => {
            return {
                ...state,
                start: payload.start,
                end: payload.end,
                books: payload.books,
            };
        },
    },
);

export default trainingReducer;
