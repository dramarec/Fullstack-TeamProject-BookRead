import React, { useState, memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import thumb_up from '../../assets/svg/thumb_up.svg';
import EndTrainingModalStyled from './EndTrainingModalStyled';
import Modal from '../modal/Modal';
import trainingSelector from '../../redux/selectors/trainingSelector';
import { getUsersBooksOperetion } from '../../redux/operations/bookOperation';
import trainingActions from '../../redux/actions/trainingActions';

const EndTrainingModal = memo(() => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isOpenModal, setIsOpenModal] = useState(false);

    const totalReadPages = useSelector(trainingSelector.getTotalReadPages);
    const totalPages = useSelector(trainingSelector.getTotalPages);
    // const training = useSelector(state => state.auth.user.training);

    const closeModal = () => {
        dispatch(trainingActions.clearTraining());
        dispatch(getUsersBooksOperetion());
        setIsOpenModal(false);
        history.push('/library');
    };

    useEffect(() => {
        totalReadPages === totalPages && setIsOpenModal(true);
        // eslint-disable-next-line
    }, [totalReadPages]);

    return (
        <>
            {isOpenModal && (
                <Modal closeModal={closeModal}>
                    <EndTrainingModalStyled>
                        <img src={thumb_up} alt="" className="statModalImg" />
                        <p className="statModalTitle">Ти молодчина!</p>
                        <p className="statModalTitle">Тренування закінчено!</p>
                        <button className="statModalBtn" onClick={closeModal}>
                            Ok
                        </button>
                    </EndTrainingModalStyled>
                </Modal>
            )}
        </>
    );
});

export default EndTrainingModal;
