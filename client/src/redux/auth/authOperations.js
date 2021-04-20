// import axios from 'axios';
// import { getDayInfoOperation } from '../diary/diaryOperations';
// import { showNoticeMessage } from '../notice/noticeActions';
// import authActions from './authActions';

// const token = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     },
//     unset() {
//         axios.defaults.headers.common.Authorization = '';
//     },
// };

// const signUpOperation = user => async (dispatch, getState) => {
//     dispatch(authActions.signUpRequest());
//     try {
//         const response = await axios.post(process.env.REACT_APP_SIGNUP_URL, {
//             ...user,
//         });

//         await dispatch(authActions.signUpSuccess({ ...response.data }));
//     } catch (error) {
//         dispatch(authActions.signUpError(error.message));
//         throw error;
//     }
// };

// const signInOperation = user => async (dispatch, getState) => {
//     dispatch(authActions.signInRequest());
//     try {
//         const response = await axios.post(process.env.REACT_APP_SIGNIN_URL, {
//             ...user,
//         });

//         token.set(response.data.accessToken);
//         dispatch(authActions.signInSuccess({ ...response.data }));

//         const username = getState().auth.user.username;
//         dispatch(
//             showNoticeMessage({
//                 message: `Привет, ${username}!`,
//                 response: 'success',
//             }),
//         );
//     } catch (error) {
//         dispatch(authActions.signInError(error.message));
//         dispatch(
//             showNoticeMessage({
//                 message: 'Email или пароль введен неверно',
//                 response: 'error',
//             }),
//         );
//         throw error;
//     }
// };

// const logoutOperations = () => async (dispatch, getState) => {
//     const accessToken = getState().auth.token.accessToken;
//     axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
//     dispatch(authActions.logoutRequest());
//     try {
//         await axios.post(process.env.REACT_APP_LOGOUT);

//         token.unset();
//         dispatch(authActions.logoutSuccess());
//     } catch (error) {
//         dispatch(authActions.logoutError(error.message));
//         dispatch(authActions.logoutSuccess());
//     }
// };

// const refreshTokenOperation = () => async (dispatch, getState) => {
//     const sid = getState().auth.token.sid;
//     const accessToken = getState().auth.token.accessToken;
//     axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
//     dispatch(authActions.getNewTokenRequest());
//     try {
//         const response = await axios.post(process.env.REACT_APP_REFRESH_TOKEN, {
//             sid,
//         });

//         token.set(response.data.newAccessToken);
//         dispatch(authActions.getNewTokenSuccess(response.data));

//         await dispatch(getDayInfoOperation());
//     } catch (error) {
//         dispatch(authActions.getNewTokenError(error.message));
//         dispatch(authActions.logoutSuccess());
//         throw error;
//     }
// };

// const getCurrentUser = () => async (dispatch, getState) => {
//     const accessToken = getState().auth.token.accessToken;

//     if (!accessToken) {
//         dispatch(logoutOperations);
//         return;
//     }

//     token.set(accessToken);

//     dispatch(authActions.getCurrentUserRequest());
//     try {
//         const response = await axios.get(
//             process.env.REACT_APP_GET_CURRENT_USER,
//         );
//         dispatch(authActions.getCurrentUserSuccess(response.data));
//     } catch (error) {
//         dispatch(authActions.getCurrentUserError(error.message));
//         throw error;
//     }
// };

// export {
//     signUpOperation,
//     signInOperation,
//     refreshTokenOperation,
//     logoutOperations,
//     getCurrentUser,
// };