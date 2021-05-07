import { createReducer } from '@reduxjs/toolkit';
import trainingActions from '../actions/trainingActions';
import authActions from '../actions/authActions';
import StateManager from 'react-select';

const initialState = {
    book: {},
    _id: '',
    start: '',
    end: '',
    duration: 0,
    pagesReadPerDay: 0,
    totalPages: 0,
    totalReadPages: 0,
    books: [],
    results: [],
};

const trainingReducer = createReducer(initialState, {
    [trainingActions.newTrainingSuccess]: (state, { payload }) => {
        return {
            _id: payload._id,
            start: payload.start,
            end: payload.end,
            duration: payload.duration,
            pagesReadPerDay: payload.pagesReadPerDay,
            totalPages: payload.totalPages,
            totalReadPages: payload.totalReadPages,
            books: payload.books,
            results: payload.results,
        };
    },
    [trainingActions.addReadPagesSuccess]: (_, { payload }) => {
        return {
            book: payload.book,
            _id: payload.training._id,
            start: payload.training.start,
            end: payload.training.end,
            duration: payload.training.duration,
            pagesReadPerDay: payload.training.pagesReadPerDay,
            totalPages: payload.training.totalPages,
            totalReadPages: payload.training.totalReadPages,
            books: payload.training.books,
            results: payload.training.results,
        };
    },
    [trainingActions.getTrainingSuccess]: (state, { payload }) => {
        return {
            ...state,
            _id: payload._id ? payload._id : '',
            start: payload.start ? payload.start : '',
            end: payload.end ? payload.end : '',
            duration: payload.duration ? payload.duration : 0,
            pagesReadPerDay: payload.pagesReadPerDay
                ? payload.pagesReadPerDay
                : 0,
            totalPages: payload.totalPages ? payload.totalPages : 0,
            totalReadPages: payload.totalReadPages ? payload.totalReadPages : 0,
            books: payload.books ? payload.books : [],
            results: payload.results ? payload.results : [],
        };
    },
    [authActions.logOutSuccess]: () => initialState,
});

export default trainingReducer;
