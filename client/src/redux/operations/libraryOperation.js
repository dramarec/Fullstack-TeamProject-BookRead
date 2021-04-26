import axios from 'axios';
import libraryAction from '../actions/libraryAction';


const getCurrentUser = () => async (dispatch) => {
    dispatch(libraryAction.getCurrentUserRequest());
    try {
        const response = await axios.get(
            process.env.REACT_APP_GET_CURRENT_USER,
        );
        dispatch(libraryAction.getCurrentUserSuccess(response.data));
    } catch (error) {
        dispatch(libraryAction.getCurrentUserError(error.message));
        throw error;
    }
};

export {
    getCurrentUser,
}