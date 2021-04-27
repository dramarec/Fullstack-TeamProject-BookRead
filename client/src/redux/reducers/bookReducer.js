import { createReducer } from '@reduxjs/toolkit';
import {
  addNewBookRequest,
  addNewBookSuccess,
  addNewBookError,
} from '../actions/bookAction';
import { changeBookSuccess } from '../actions/changeBookAction';
import { getUsersBooksSuccess } from '../actions/userLibraryAction';

const initialState = {
  willRead: [],
  readNow: [],
  readFinish: []
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
    [getUsersBooksSuccess]: (state, {payload}) => {
      return { ...state,
          willRead: payload.planeToRead,
          readNow: payload.readNow,
          readFinish: payload.readFinish}
      },

    [changeBookSuccess]: (state, {payload}) =>
     { initialState.readFinish.map(item =>
          item.id === payload.id ? { ...payload } : item,
      )},

    [addNewBookError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
);

export { bookReduser };

