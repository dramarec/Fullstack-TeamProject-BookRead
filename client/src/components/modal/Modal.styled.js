import styled from 'styled-components';

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(33, 33, 33, 0.25);
    z-index: 1200;
    .modal {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 22px 40px 0px rgba(0, 0, 0, 0.1);
        background-color: #fff;
    }
    .closeButton {
        position: absolute;
        top: 0;
        right: 0;
    }
`;

export default ModalWrapper;
