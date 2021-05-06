import React, { useState, memo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import thumb_up from '../../assets/svg/thumb_up.svg';
import EndTrainingModalStyled from './EndTrainingModalStyled';
import Modal from '../modal/Modal';
import { useSelector } from 'react-redux';
import trainingSelector from '../../redux/selectors/trainingSelector';
// import NewModal from './NewModal';

const EndTrainingModal = memo(() => {
    const history = useHistory();
    const [isOpenModal, setIsOpenModal] = useState(false);
    // console.log('EndTrainingModal ===> isOpenModal', isOpenModal);

    const totalReadPages = useSelector(trainingSelector.getTotalReadPages);
    // console.log('EndTrainingModal ===> totalReadPages', totalReadPages);
    const totalPages = useSelector(state => state.training.totalPages);
    // console.log('EndTrainingModal ===> totalPages', totalPages);

    const closeModal = () => {
        history.push('/library');
        setIsOpenModal(false);
    };

    if (totalReadPages === totalPages) {
        setTimeout(() => {
            setIsOpenModal(true);
        }, 1000);
    }

    return (
        <>
            {isOpenModal && (
                <Modal closeModal={closeModal}>
                    <EndTrainingModalStyled>
                        <img src={thumb_up} alt="" className="statModalImg" />
                        <p className="statModalTitle">Ваше тренування</p>
                        <p className="statModalTitle">закінчено!</p>
                        <button className="statModalBtn" onClick={closeModal}>
                            <a href="/training">Почати нове тренування</a>
                        </button>
                        <button className="statModalBtn" onClick={closeModal}>
                            <a href="/library">Додати нові книжки</a>
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
