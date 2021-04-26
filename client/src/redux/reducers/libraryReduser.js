import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import libraryAction from '../actions/libraryAction';

const initialState = {
    userBooks: {
    planeToRead: [],
    readNow: [],
    readFinish: []
}
};

const getUserBooks = createReducer(initialState, {
    [libraryAction.getCurrentUserRequest]: (state, {payload}) => {
        return {
            ...state,
            userBooks: {...payload.userBooks}
        }
    }
})