import axios from 'axios';
import {
  addNewBookRequest,
  addNewBookSuccess,
  addNewBookError,
} from '../actions/bookAction';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const addBookOperation = book => async dispatch => {
  dispatch(addNewBookRequest());
  try {
    const response = await axios.post('/books', book);

    // const { data } = response;
    //console.log(`response.data ===>`, response.data.data.newBook);

    //console.log(`data`, data);

    dispatch(addNewBookSuccess(response.data));
  } catch (error) {
    dispatch(addNewBookError(error));
  }
};

export { addBookOperation };
