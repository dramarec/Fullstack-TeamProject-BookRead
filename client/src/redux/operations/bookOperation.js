import axios from 'axios';
import {
  addNewBookRequest,
  addNewBookSuccess,
  addNewBookError,
} from '../actions/bookAction';

const addBookOperation = book => async dispatch => {
  dispatch(addNewBookRequest());
  try {
    const response = await axios.post('/books', book);
    console.log(`response.book`, response.book);
    dispatch(addNewBookSuccess(response.book));
  } catch (error) {
    dispatch(addNewBookError(error));
  }
};

export { addBookOperation };
