import React, { useState, memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import thumb_up from '../../assets/svg/thumb_up.svg';
import EndTrainingModalStyled from './EndTrainingModalStyled';
import Modal from '../modal/Modal';
import trainingSelector from '../../redux/selectors/trainingSelector';
import trainingOperation from '../../redux/operations/trainingOperation';
// import NewModal from './NewModal';

const EndTrainingModal = memo(() => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isOpenModal, setIsOpenModal] = useState(false);

    const totalReadPages = useSelector(trainingSelector.getTotalReadPages);
    const totalPages = useSelector(state => state.training.totalPages);

    const closeModal = path => {
        // if (path === '/training') {
        //     setIsOpenModal(false);
        // }
        if (path === '/library') {
            setIsOpenModal(false);
            history.push(path);
        }
        dispatch(trainingOperation.getTrainingOperation());
    };

    useEffect(() => {
        totalReadPages === totalPages && setIsOpenModal(true);
    }, [totalReadPages]);

    return (
        <>
            {isOpenModal && (
                <Modal closeModal={closeModal}>
                    <EndTrainingModalStyled>
                        <img src={thumb_up} alt="" className="statModalImg" />
                        <p className="statModalTitle">Тренування закінчено!</p>
                        {/* <p className="statModalTitle">закінчено!</p> */}
                        {/* <button
                            className="statModalBtn"
                            onClick={() => closeModal('/training')}
                        >
                            Почати нове тренування
                        </button> */}
                        <button
                            className="statModalBtn"
                            onClick={() => closeModal('/library')}
                        >
                            Ok
                        </button>
                        {/* <Link
                            className="statModalBtn"
                            to="/training"
                            onClick={closeModal}
                        >
                            Почати нове тренування
                        </Link>
                        <Link
                            className="statModalBtn"
                            to="/library"
                            onClick={closeModal}
                        >
                            Додати нові книжки
                        </Link> */}
                    </EndTrainingModalStyled>
                </Modal>
            )}
        </>
    );
});

export default EndTrainingModal;
