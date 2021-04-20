// const toggleModal = modal => {
//     return {
//         type: 'modal/toogleModal',
//         payload: { modal }
//     }
// }

// export default toggleModal

import { createAction } from '@reduxjs/toolkit';

const toggleModal = createAction('modal/toggleModal');
// const openModal = createAction('modal/openModal');
// const closeModal = createAction('modal/closeModal');

export default { toggleModal };