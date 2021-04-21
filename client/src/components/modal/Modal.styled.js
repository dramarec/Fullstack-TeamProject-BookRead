import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(33, 33, 33, 0.25);
  z-index: 1200;
.modal{
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

.closeButton{
  width: 127px;
  height: 40px;
    font-weight: 500;
    font-size: 14px;
    line-height: 2.71;
    color:#fff;
    background-color:#FF6B08;
    border-color: transparent;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}
`

export default ModalWrapper;