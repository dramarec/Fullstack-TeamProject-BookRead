import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  width: 270px;
  padding: 44px 16px 50px 17px;
  background: #ffffff;
  box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);

  @media screen and (min-width: 768px) {
    width: 390px;
    padding: 40px 47px 51px;
  }

  .statModalImg {
    margin: 0 auto 14px;
    width: 54px;
    height: 54px;
  }
  .statModalTitle {
    font-family: 'Montserrat-Regular';
    font-size: 16px;
    line-height: 1.38;
    color: #242a37;
  }

  .statModalBtn {
    display: flex;
    justify-content: center;
    font-family: 'Montserrat-Medium';
    font-size: 14px;
    line-height: 2.71;
    color: #ffffff;
    padding: 1px 38px;
    margin: 25px auto 0px;
    background-color: #ff6b08;
    outline: none;
    border: none;
    height: 40px;
    @media screen and (min-width: 768px) {
      padding: 1px 54px 1px 55px;
    }
  }
`;

export default Wrapper;
