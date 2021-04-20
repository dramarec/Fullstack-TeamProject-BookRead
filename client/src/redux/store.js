// import { createStore, combineReducers } from 'redux';
// import modalReducer from './reducers/modalReducer'

// const rootReducer = combineReducers({
//     modal: modalReducer
// })

// const store = createStore(rootReducer);

// export default store;




import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import modalReducer from './reducers/modalReducer';

const store = configureStore({
    reducer: modalReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export default store;

export const persistor = persistStore(store);



