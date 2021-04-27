import React from 'react';
import { useDispatch } from 'react-redux';
import modalActions from '../../redux/actions/modalAction';
import ButtonAddStyled from './ButtonAddStyled';

const ButtonAdd = ({ onHandleClick }) => {
  const dispatch = useDispatch();

  return (
    <ButtonAddStyled>
      <button className="addBtn" onClick={onHandleClick}>
        +
      </button>
    </ButtonAddStyled>
  );
};

export default ButtonAdd;
