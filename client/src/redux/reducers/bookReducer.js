import { createReducer } from '@reduxjs/toolkit';
import { addNewBookSuccess } from '../actions/bookAction';
import { changeBookSuccess } from '../actions/changeBookAction';
import { getUsersBooksSuccess } from '../actions/userLibraryAction';
import authActions from '../actions/authActions';

const initialState = {
    willRead: [],
    readNow: [],
    readFinish: [],
};

const bookReduser = createReducer(initialState, {
    [addNewBookSuccess]: (state, action) => ({
        ...state,
        willRead: [...state.willRead, action.payload.newBook],
    }),
    [getUsersBooksSuccess]: (state, { payload }) => {
        return {
            ...state,
            willRead: payload.planeToRead,
            readNow: payload.readNow,
            readFinish: payload.readFinish,
        };
    },
    [changeBookSuccess]: (state, { payload }) => {
        state.readFinish.map(item =>
            item.id === payload.id ? { ...payload } : item,
        );
    },
    [authActions.logOutSuccess]: () => initialState,
});

export { bookReduser };
