import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import thumb_up from '../../assets/svg/thumb_up.svg';
import EndTrainingModalStyled from './EndTrainingModalStyled';
import Modal from '../modal/Modal';
import { useSelector } from 'react-redux';
import trainingSelector from '../../redux/selectors/trainingSelector';

const EndTrainingModal = () => {
    const [isOpenModal, setIsOpenModal] = useState(true);

    const totalReadPages = useSelector(trainingSelector.getTotalReadPages);
    const totalPages = useSelector(state => state.training.totalPages);

    const closeModal = () => {
        setIsOpenModal(false);
    };

    // const isOpenModal = totalReadPages === totalPages;
    return (
        <>
            {isOpenModal && (
                <Modal>
                    <EndTrainingModalStyled>
                        <img src={thumb_up} alt="" className="statModalImg" />
                        <p className="statModalTitle">Ваша тренування</p>
                        <p className="statModalTitle">закінчено!</p>

                        <Link
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
                        </Link>
                    </EndTrainingModalStyled>
                </Modal>
            )}
        </>
    );
};

export default EndTrainingModal;
