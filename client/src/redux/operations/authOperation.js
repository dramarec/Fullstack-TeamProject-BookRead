import api from '../../services/api';
import authActions from '../actions/authActions';

const regOperation = newUser => async dispatch => {
    dispatch(authActions.regRequest());

    try {
        const data = await api.reg(newUser);

        api.setToken(data.token);

        const logInValues = {
            email: newUser.email,
            password: newUser.password,
        };

        dispatch(authActions.regSuccess(data));
        dispatch(logInOperation(logInValues));
    } catch (err) {
        dispatch(authActions.regError(err.message));
    }
};

const logInOperation = userCredentials => async dispatch => {
    dispatch(authActions.logInRequest());

    try {
        const data = await api.logIn(userCredentials);

        api.setToken(data.token);

        dispatch(authActions.logInSuccess(data));
    } catch (err) {
        dispatch(authActions.logInError(err.message));
    }
};

const logInWithGoogleOperation = userCredentials => async dispatch => {
    console.log('userCredentials', userCredentials);
    dispatch(authActions.logInGoogleRequest());

    try {
        const data = await api.logInWithGoogle(userCredentials);
        console.log('data', data);

        api.setToken(data.token);

        dispatch(authActions.logInGoogleSuccess(data));
    } catch (err) {
        dispatch(authActions.logInGoogleError(err.message));
    }
};

const logOutOperation = () => async (dispatch, getState) => {
    const accessToken = getState().auth.token;
    api.setToken(accessToken);

    dispatch(authActions.logOutRequest());

    try {
        await api.logOut();

        api.unsetToken();

        dispatch(authActions.logOutSuccess());
    } catch (err) {
        dispatch(authActions.logOutError(err.message));
    }
};

const authOperations = {
    regOperation,
    logInOperation,
    logInWithGoogleOperation,
    logOutOperation,
};

export default authOperations;
