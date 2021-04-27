import React from 'react';
import { useDispatch } from 'react-redux';
import modalActions from '../../redux/actions/modalAction';
import thumb_up from '../../assets/svg/thumb_up.svg';
import StatModalStyled from './StatModalStyled';

const StatModal = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(modalActions.toggleModal());
  };

  return (
    <StatModalStyled>
      <img src={thumb_up} alt="" className="statModalImg" />
      <p className="statModalTitle">Ти молодчина,</p>
      <p className="statModalTitle">але потрібно швидше!</p>
      <p className="statModalTitle">
        Наступного разу тобі все вдасться)
        {/* </p>&#x207E; */}
      </p>
      <button className="statModalBtn" type="button" onClick={closeModal}>
        Ok
      </button>
    </StatModalStyled>
  );
};

export default StatModal;
