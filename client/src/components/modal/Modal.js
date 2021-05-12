import React, { useEffect } from 'react';
import ModalWrapper from './Modal.styled';

const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = evt => {
    if (evt.target.dataset.name !== 'wrapper') {
      return;
    }

    closeModal();
  };

  const handleKeyPress = evt => {
    if (evt.code === 'Escape') {
      closeModal();
    }
  };

  return (
    <ModalWrapper onClick={handleClick} data-name="wrapper">
      <div className="modal">{children}</div>
    </ModalWrapper>
  );
};

export default Modal;
