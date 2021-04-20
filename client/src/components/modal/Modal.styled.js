import styled from 'styled-components';

const ModalWrapper = styled.div`
position: fixed;
 top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
background-color: rgba(33, 33, 33, 0.25);
z-index: 1200;
.modal-active{
  overflow: hidden;
  /* opacity:1;
  pointer-events:all; */
}
.modal-not-active{
  overflow: visible;
  /* opacity:0;
    pointer-events:none;
    transition:0.5s; */
}
 .open {
    /* overflow: hidden; */
    opacity:0;
  }
  .close {
    overflow: visible;
  }
.modal{
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* height:200px;
    width:200px; */
    display: flex;
  justify-content: center;
  align-items: center;
    box-shadow: 0px 22px 40px 0px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}

.closeButton{

}
`

export default ModalWrapper;