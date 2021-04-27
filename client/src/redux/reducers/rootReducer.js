import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import modalReducer from './modalReducer';
import books from './userLibraryReducer'
import book from './userLibraryReducer'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, () => null),
  library: books,
  books: book,
  modal: modalReducer,
});

export default rootReducer;
