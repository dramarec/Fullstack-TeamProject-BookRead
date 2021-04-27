
import { createReducer } from '@reduxjs/toolkit';
import { changeBookSuccess } from '../actions/changeBookAction';
   
import {getUsersBooksSuccess} from '../actions/userLibraryAction';

const initialState = {
    planeToRead: [],
    readNow: [],
    readFinish: []
}
//};

const books = createReducer(initialState, {
    [getUsersBooksSuccess]: (state, {payload}) => {
        return { ...state,
            planeToRead: payload.planeToRead,
            readNow: payload.readNow,
            readFinish: payload.readFinish,
           //payload
           // ...state,
            //userBooks: {...payload.userBooks}
        }
    }
})
/*const initialStates = {
    review: '',
    rating: null
}*/
const onEditBook = (state, action) =>
initialState.readFinish.map(item =>
    item.id === action.payload.id ? { ...action.payload } : item,
  );

const book = createReducer('', {
    [changeBookSuccess]: onEditBook
        
})

export default books