
const modalReducer = (state = false, action) => {
    switch (action.type) {
        case 'modal/toggleModal':
            return action.payload = !state;
        default:
            return state;

    }
}
export default modalReducer;
