import styled from 'styled-components';

const Wrapper = styled.div`
  .addBtn {
    @media screen and (max-width: 767px) {
      /* position: absolute;
      left: 45%;
      bottom: -160px; */
      display: block;
      margin: 0 auto;
      font-family: 'Montserrat-Regular';
      font-size: 35px;
      width: 52px;
      height: 52px;
      border: none;
      outline: none;
      border-radius: 50px;
      background-color: #ff6b08;
      color: #ffffff;
      cursor: pointer;
      z-index: 100;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }
`;

export default Wrapper;
