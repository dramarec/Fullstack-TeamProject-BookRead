import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalWrapper from './Modal.styled';
import getModalState from '../../redux/selectors/modalSelector';
import modalActions from '../../redux/actions/modalAction';

const Modal = ({ children, text }) => {
    const modalActive = useSelector(getModalState);
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const handleClick = e => {
        if (e.target.dataset.name !== 'wrapper') {
            return;
        }
        dispatch(modalActions.toggleModal());
    };

    const handleKeyPress = e => {
        if (e.code === 'Escape') {
            dispatch(modalActions.toggleModal());
        }
    };

    const closeModal = () => {
        dispatch(modalActions.toggleModal());
    }

    return (
        <>
            {modalActive && (< ModalWrapper onClick={handleClick} data-name='wrapper'>
                <div className='modal'>
                    {children}
                    <button className='closeButton' type='button' onClick={closeModal}>Cancel</button>
                </div>
            </ModalWrapper >)}
        </>
    )


}

export default Modal