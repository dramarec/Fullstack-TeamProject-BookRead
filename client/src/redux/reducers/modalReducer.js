import { createReducer } from '@reduxjs/toolkit';
import modalActions from '../actions/modalAction';

// const modalReducer = createReducer(false, {
//     [modalActions.toggleModal]: (state) => { return state },
//     [modalActions.openModal]: () => true,
//     [modalActions.closeModal]: () => false,
// });




const modalReducer = (state = false, action) => {
    switch (action.type) {
        case 'modal/toggleModal':
            // return console.log(action)
            return action.payload = !state;
        // case 'modal/openModal':
        //     return state = true;
        // case 'modal/closeModal':
        //     return state = false;
        default:
            return state;

    }
}
export default modalReducer;
