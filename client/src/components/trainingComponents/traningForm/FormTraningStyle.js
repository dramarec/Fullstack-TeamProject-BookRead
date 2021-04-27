import styled from 'styled-components';

const FormTraningStyle = styled.div`
  .training-form {
    &__pickers {
      display: flex;
      justify-content: space-around;
      margin-bottom: 25px;
    }
  }

  .selectwrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  .select {
    font-family: 'Montserrat-Regular';
    color: var(--third-text);
    font-size: 14px;

    @media (min-width: 767px) {
      width: 482px;
    }
    @media (min-width: 1279px) {
      width: 670px;
    }
    height: 42px;
    padding: 2px 13px;
    border: none;
    background-color: #fff;
    box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
  }

  .bookFormBtn {
    display: flex;
    justify-content: center;
    font-family: 'Montserrat-Medium';
    font-size: 14px;
    line-height: 2.71;
    padding: 0px 58px;
    /* margin: 35px auto 0px; */
    border: 1px solid #242a37;
    background-color: #f6f7fb;
    outline: none;
    height: 42px;

    /* @media screen and (min-width: 1280px) {
      margin: 36px 0px 0px 41px;
    } */
    &:hover,
    &:focus {
      color: #f6f7fb;
      background-color: #ff6b08;
      border: 1px solid #f6f7fb;
      outline: none;
    }
  }
`;

export default FormTraningStyle;
