import React from 'react';
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
