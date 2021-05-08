import axios from 'axios';
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

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const addBookOperation = book => async dispatch => {
    dispatch(addNewBookRequest());
    try {
        const response = await api.addBook(book);
        //const response = await axios.post('/books', book);

        // const { data } = response;
        //console.log(`response.data ===>`, response.data.data.newBook);

        //console.log(`data`, data);

        dispatch(addNewBookSuccess(response));
    } catch (error) {
        dispatch(addNewBookError(error));
    }
};

const getUsersBooksOperetion = () => async (dispatch, getState) => {
    const accessToken = getState().auth.token;

    token.set(accessToken);
    dispatch(getUsersBooksRequest());
    try {
        const response = await axios.get('/users/user');
        //dispatch(console.log(response.data));
        dispatch(getUsersBooksSuccess(response.data.data));
        // console.log(response.data);
    } catch (error) {
        dispatch(getUsersBooksError(error.message));
        throw error;
    }
};

const changeBookOperation = (id, book) => async dispatch => {
    //const bookId = book._id
    dispatch(changeBookRequest());
    try {
        await axios.patch(`/books/${id}`, book);
        dispatch(changeBookSuccess({ ...book }));
        //console.log('OperBook',book);
        dispatch(getUsersBooksOperetion());
    } catch (error) {
        dispatch(changeBookError(error.response.data.message));
        throw error;
    }
};

export { addBookOperation, getUsersBooksOperetion, changeBookOperation };
