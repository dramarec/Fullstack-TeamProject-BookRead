import React from 'react';
import { useDispatch } from 'react-redux';
import modalActions from '../../redux/actions/modalAction';

// DELETE AFTER TESTING!!!!!

const Button = () => {
    const dispatch = useDispatch();

    const handleClick = e => {
        dispatch(modalActions.toggleModal());
        document.body.style.overflow = 'visible';
    };

    return (
        <button onClick={handleClick}>Open modal</button>
    )
}

export default Button;