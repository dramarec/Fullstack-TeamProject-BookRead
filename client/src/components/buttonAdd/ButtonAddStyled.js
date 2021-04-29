import styled from 'styled-components';

const Wrapper = styled.div`
  .addBtn {
    @media screen and (max-width: 767px) {
      position: fixed;
      right: 50%;
      bottom: 15px;
      transform: translate(50%);
      width: 52px;
      height: 52px;
      border: none;
      outline: none;
      background-color: #ff6b08;
      border-radius: 50px;
      margin: 0 auto;
      font-family: 'Montserrat-Regular';
      font-size: 35px;
      color: #ffffff;
      cursor: pointer;
      z-index: 100;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;

export default Wrapper;
