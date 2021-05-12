import api from '../../services/api';
import {
    addNewBookRequest,
    addNewBookSuccess,
    addNewBookError,
} from '../actions/bookAction';
import {
    getUsersBooksRequest,
    getUsersBooksSuccess,
    getUsersBooksError,
} from '../actions/userLibraryAction';

import {
    changeBookSuccess,
    changeBookRequest,
    changeBookError,
} from '../actions/changeBookAction';

const addBookOperation = book => async dispatch => {
    dispatch(addNewBookRequest());
    try {
        const response = await api.addBook(book);

        dispatch(addNewBookSuccess(response));
    } catch (error) {
        dispatch(addNewBookError(error));
    }
};

const getUsersBooksOperetion = () => async (dispatch, getState) => {
    dispatch(getUsersBooksRequest());
    const accessToken = getState().auth.token;

    api.setToken(accessToken);
    try {
        const data = await api.getLibraryInfo();

        dispatch(getUsersBooksSuccess(data));
    } catch (error) {
        dispatch(getUsersBooksError(error.message));
    }
};

const changeBookOperation = (id, book) => async dispatch => {
    dispatch(changeBookRequest());
    try {
        await api.addReviewToBook(id, book);
        dispatch(changeBookSuccess({ ...book }));
        dispatch(getUsersBooksOperetion());
    } catch (error) {
        dispatch(changeBookError(error.response.data.message));
        throw error;
    }
};

export { addBookOperation, getUsersBooksOperetion, changeBookOperation };
