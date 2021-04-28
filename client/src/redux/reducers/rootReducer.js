import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import modalReducer from './modalReducer';
import trainingReducer from './trainingReducer';
import { bookReduser } from './bookReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    modal: modalReducer,
    training: trainingReducer,
    library: bookReduser,
    loading: loadingReducer,
    errors: errorReducer,
});

export default rootReducer;
