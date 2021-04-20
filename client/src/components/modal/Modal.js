import React, { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import ModalWrapper from './Modal.styled';
import toggleModal from '../../redux/actions/modalAction';
import getModalState from '../../redux/selectors/modalSelector';
import modalActions from '../../redux/actions/modalAction';

const Modal = ({ children }) => {
    const modalActive = useSelector(getModalState);
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    useEffect(() => {
        document.body.className = modalActive ? 'open' : 'close';
        document.body.style.overflow = modalActive ? 'hidden' : 'visible';
    }, [modalActive]);

    const handleClick = e => {
        if (e.target.dataset.name !== 'wrapper') {
            return;
        }
        dispatch(modalActions.toggleModal());
        document.body.style.overflow = 'visible';
    };

    const handleKeyPress = e => {
        if (e.code === 'Escape') {
            dispatch(modalActions.toggleModal());
        }
        document.body.style.overflow = 'visible';
    };

    const closeModal = () => {
        dispatch(modalActions.toggleModal());
        document.body.style.overflow = 'visible';
    }

    return (
        <>
            {modalActive && (< ModalWrapper onClick={handleClick} data-name='wrapper'>
                <div className='modal'>
                    {children}
                    <button className='closeButton' type='button' onClick={closeModal}>Test</button>
                </div>
            </ModalWrapper >)}
        </>
    )


}

export default Modal

// const mapStateToProps = state => {
//     console.log(state.modal)
//     return {
//         value: state.modal
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         toggleModal: () => dispatch(toggleModal(value))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Modal)











// export const ModalA = ({ children }) => {
//     const modalActive = useSelector(getModalSelector);
//     // const modalActive = useSelector(getModalState);
//     const dispatch = useDispatch();
//     // const onlyWidth = useWindowWidth();
//     useEffect(() => {
//         window.addEventListener('keydown', handleKeyDown);
//         return () => {
//             window.removeEventListener('keydown', handleKeyDown);
//         };
//     }, []);

//     useEffect(() => {
//         document.body.className = modalActive ? 'open' : 'close';
//         document.body.style.overflow = modalActive ? 'hidden' : 'visible';
//     }, [modalActive]);

//     const handleKeyDown = e => {
//         //     if (e.code === 'Escape') {
//         //         dispatch(modalActions.toggleModal());
//         //     }
//         //     document.body.style.overflow = 'visible';
//         // };
//         const handleClick = e => {
//             if (e.target.dataset.name !== 'overlay') {
//                 return;
//             }
//             dispatch(modalActions.toggleModal());
//             document.body.style.overflow = 'visible';
//         };
//         const closeModal = () => {
//             dispatch(modalActions.offModal());
//             document.body.style.overflow = 'visible';
//         };

//         return (
//             <>
//                 {modalActive && (
//                     <ModalWindow onClick={handleClick} data-name="overlay">
//                         <div className="modal" data-name="modal">
//                             <h1>Hello</h1>
//                             {/* <button
//                             className={onlyWidth < 768 ? 'arrowCloseButton' : 'closeButton'}
//                             type="button"
//                             onClick={closeModal}
//                         ></button> */}
//                             {children}
//                         </div>
//                     </ModalWindow>
//                 )}
//             </>
//         );

//     }

//     // export default Modal;