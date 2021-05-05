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
        console.log(payload, 'PAYLOAD 3456');
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
    [trainingActions.getTrainingSuccess]: (_, { payload }) => {
        return {
            _id: payload._id ? payload._id : '',
            start: payload.start ? payload.start : '',
            end: payload.end ? payload.end : '',
            duration: payload.duration ? payload.duration : 0,
            pagesReadPerDay: payload.pagesReadPerDay
                ? payload.pagesReadPerDay
                : 0,
            totalPages: payload.totalPages ? payload.totalPages : 0,
            books: payload.books ? payload.books : [],
            results: payload.results ? payload.results : [],
        };
    },
});

export default trainingReducer;
