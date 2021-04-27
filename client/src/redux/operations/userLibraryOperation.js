/*import axios from 'axios';
import {
    getUsersBooksRequest,
    getUsersBooksSuccess,
    getUsersBooksError
} from '../actions/userLibraryAction';

import {
    changeBookSuccess,
    changeBookRequest,
    changeBookError
} from '../actions/changeBookAction'

axios.defaults.baseURL= 'http://localhost:5000/api'
//axios.defaults.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODI3MzY1OTBjMThhNzI1Y2Y2YjBhNSIsImlhdCI6MTYxOTQ5OTQwNSwiZXhwIjoxNjIyMDkxNDA1fQ.MOEjbpqRVdyAjc7yMbGhEAfLmJSPg-7rCiU0Mnibp1I'

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};
const getUsersBooksOperetion = () => async (dispatch, getState) => {
    const accessToken = getState().auth.token;

    token.set(accessToken)
    dispatch(getUsersBooksRequest());
    try {
        const response = await axios.get("/users/user");
       // console.log(response.data);
        dispatch(getUsersBooksSuccess(response.data.data));
    } catch (error) {
        dispatch(getUsersBooksError(error.message));
        throw error;
    }
};

const changeBookOperation = (info) => async dispatch => {
    dispatch(changeBookRequest());
    try {
        const response = await axios.patch(`/books/${info.id/*bookId*//*}`, info );
        console.log(info);
        dispatch(changeBookSuccess(info));
    } catch (error) {
        dispatch(changeBookError
            (error.message));
        throw error;
    }
};


export {
    getUsersBooksOperetion,
    changeBookOperation
}*/