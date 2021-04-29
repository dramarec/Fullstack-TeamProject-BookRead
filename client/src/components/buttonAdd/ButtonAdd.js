import React from 'react';
import { useDispatch } from 'react-redux';
import modalActions from '../../redux/actions/modalAction';
import ButtonAddStyled from './ButtonAddStyled';

const ButtonAdd = ({ onHandleClick }) => {
  return (
    <ButtonAddStyled>
      <button className="addBtn" onClick={onHandleClick}>
        +
      </button>
    </ButtonAddStyled>
  );
};

export default ButtonAdd;
