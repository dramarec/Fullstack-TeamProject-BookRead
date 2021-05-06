import { createAction } from '@reduxjs/toolkit';

const toggleModal = createAction('modal/toggleModal');

const modalAction = { toggleModal };

export default modalAction;
