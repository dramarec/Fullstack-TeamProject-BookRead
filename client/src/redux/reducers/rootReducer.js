import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import modalReducer from './modalReducer';
/*<<<<<<< HEAD
import books from './userLibraryReducer'
import book from './userLibraryReducer'
=======*/
import { bookReduser } from './bookReducer';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
/*<<<<<<< HEAD
  auth: persistReducer(authPersistConfig, () => null),
  library: books,
  books: book,
=======*/
  auth: persistReducer(authPersistConfig, authReducer),
  modal: modalReducer,
  library: bookReduser,
});

export default rootReducer;
