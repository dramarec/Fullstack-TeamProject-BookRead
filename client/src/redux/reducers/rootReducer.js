import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import modalReducer from './modalReducer';
<<<<<<< HEAD
import trainingReducer from './trainingReducer';
=======
/*<<<<<<< HEAD
import books from './userLibraryReducer'
import book from './userLibraryReducer'
=======*/
>>>>>>> dev
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
  training: trainingReducer,
  library: bookReduser,
});

export default rootReducer;
