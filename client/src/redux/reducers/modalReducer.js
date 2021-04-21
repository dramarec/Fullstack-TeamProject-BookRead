
const modalReducer = (state = false, action) => {
    switch (action.type) {
        case 'modal/toggleModal':
            return action.payload = !state;
        default:
            return state;

    }
}
export default modalReducer;




















// import { createReducer } from '@reduxjs/toolkit';
// import modalActions from '../actions/modalAction';

// const modalReducer = createReducer(false, {
//     [modalActions.toggleModal]: state => !state,
// });

// export default modalReducer;
