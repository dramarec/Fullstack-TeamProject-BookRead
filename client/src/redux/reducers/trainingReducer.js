import { createReducer } from '@reduxjs/toolkit';
import trainingActions from '../actions/trainingActions';

const initialState = {
    _id: '',
    start: '',
    end: '',
    duration: 0,
    pagesReadPerDay: 0,
    totalPages: 0,
    books: [],
    results: [],
};

const trainingReducer = createReducer(initialState, {
    [trainingActions.newTrainingSuccess]: (_, { payload }) => {
        return {
            _id: payload._id,
            start: payload.start,
            end: payload.end,
            duration: payload.duration,
            pagesReadPerDay: payload.pagesReadPerDay,
            totalPages: payload.totalPages,
            books: payload.books,
            results: payload.results,
        };
    },
    [trainingActions.addReadPagesSuccess]: (state, { payload }) => {
        return {
            ...state,
            results: payload.results,
        };
    },
    [trainingActions.getTrainingSuccess]: (_, { payload }) => {
        return {
            _id: payload._id,
            start: payload.start,
            end: payload.end,
            duration: payload.duration,
            pagesReadPerDay: payload.pagesReadPerDay,
            totalPages: payload.totalPages,
            books: payload.books,
            results: payload.results,
        };
    },
});

export default trainingReducer;
