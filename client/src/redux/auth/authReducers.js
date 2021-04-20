// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import authActions from './authActions';
// import dailyRateActions from '../dailyRate/dailyRateAction';
// import diaryActions from '../diary/diaryActions';

// const initialUserState = {
//     email: '',
//     username: '',
//     id: '',
//     isAuth: false,
// };

// const userReducer = createReducer(initialUserState, {
//     [authActions.signUpSuccess]: (state, { payload }) => ({
//         ...state,
//         email: payload.email,
//         username: payload.username,
//         id: payload.id,
//     }),
//     [authActions.signInSuccess]: (state, { payload }) => ({
//         ...state,
//         email: payload.user.email,
//         id: payload.user.id,
//         username: payload.user.username,
//         isAuth: true,
//     }),

//     [authActions.logoutSuccess]: () => initialUserState,

//     [authActions.getCurrentUserSuccess]: (state, { payload }) => ({
//         ...state,
//         email: payload.email,
//         username: payload.username,
//         id: payload.id,
//     }),
// });

// const initialToken = {
//     accessToken: '',
//     refreshToken: '',
//     sid: '',
// };

// const tokenReducer = createReducer(initialToken, {
//     [authActions.signInSuccess]: (state, { payload }) => ({
//         ...state,
//         accessToken: payload.accessToken,
//         refreshToken: payload.refreshToken,
//         sid: payload.sid,
//     }),
//     [authActions.logoutSuccess]: () => initialToken,
//     [authActions.getNewTokenSuccess]: (state, { payload }) => ({
//         ...state,
//         accessToken: payload.newAccessToken,
//         refreshToken: payload.newRefreshToken,
//         sid: payload.sid,
//     }),
// });

// const errorReducer = createReducer(null, {
//     [authActions.signUpError]: (_, { payload }) => payload,
//     [authActions.signUpSuccess]: () => null,

//     [authActions.signInError]: (_, { payload }) => payload,
//     [authActions.signInSuccess]: () => null,

//     [authActions.logoutError]: () => null,

//     [authActions.getNewTokenError]: (_, { payload }) => payload,
//     [authActions.getNewTokenSuccess]: () => null,

//     [authActions.getCurrentUserError]: (_, { payload }) => payload,
//     [authActions.getCurrentUserSuccess]: () => null,

//     [dailyRateActions.getDailyRateError]: (_, { payload }) => payload,
//     [dailyRateActions.getDailyRateSuccess]: () => null,

//     [dailyRateActions.getDailyRateErrorAuth]: (_, { payload }) => payload,
//     [dailyRateActions.getDailyRateSuccessAuth]: () => null,

//     [diaryActions.addProductError]: (_, { payload }) => payload,
//     [diaryActions.addProductSuccess]: () => null,

//     [diaryActions.getProductError]: (_, { payload }) => payload,
//     [diaryActions.getProductSuccess]: () => null,
// });

// const loadingReducer = createReducer(false, {
//     [authActions.signUpRequest]: () => true,
//     [authActions.signUpSuccess]: () => false,
//     [authActions.signUpError]: () => false,

//     [authActions.signInRequest]: () => true,
//     [authActions.signInSuccess]: () => false,
//     [authActions.signInError]: () => false,

//     [authActions.logoutRequest]: () => true,
//     [authActions.logoutSuccess]: () => false,
//     [authActions.logoutError]: () => false,

//     [authActions.getCurrentUserRequest]: () => true,
//     [authActions.getCurrentUserSuccess]: () => false,
//     [authActions.getCurrentUserError]: () => false,

//     [diaryActions.addProductRequest]: () => true,
//     [diaryActions.addProductSuccess]: () => false,
//     [diaryActions.addProductError]: () => false,
// });

// const userPersistConfig = {
//     key: 'user',
//     storage,
//     whitelist: ['isAuth'],
// };

// const tokenPersistConfig = {
//     key: 'token',
//     storage,
//     whitelist: ['accessToken', 'refreshToken', 'sid'],
// };

// export default combineReducers({
//     user: persistReducer(userPersistConfig, userReducer),
//     token: persistReducer(tokenPersistConfig, tokenReducer),
//     error: errorReducer,
//     loading: loadingReducer,
// });