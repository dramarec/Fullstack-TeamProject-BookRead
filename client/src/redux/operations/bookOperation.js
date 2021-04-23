import axios from 'axios';
import {
  postBookRequest,
  postBookSuccess,
  postBookError,
} from '../actions/bookAction';

const postBookOperation = book => async dispatch => {
  dispatch(postBookRequest());
  try {
    const response = await axios.post('/books', book);
    console.log(`response.book`, response.book);
    dispatch(postBookSuccess(response.book));
  } catch (error) {
    dispatch(postBookError(error));
  }
};

export { postBookOperation };
