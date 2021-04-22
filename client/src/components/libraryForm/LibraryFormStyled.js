import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f7fb;
  padding-top: 52px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 20px;
    min-width: 594px;
  }
  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
    align-items: flex-start;
    min-width: 1117px;
  }

  .bookForm {
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      //margin: 0px 87px 693px;
      width: 594px;
    }
    @media screen and (min-width: 1280px) {
      display: flex;
      flex-direction: row;

      //margin: 30px 124px 680px 39px;
      width: 1117px;
    }
  }
  .bookFormList {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1280px) {
      flex-direction: row;
    }
  }
  .bookFormListItem {
    @media screen and (max-width: 767px) {
      width: 270px;
    }
  }
  .bookFormListItem:not(:last-child) {
    @media screen and (min-width: 1280px) {
      margin-right: 15px;
    }
  }
  /* .bookFormListItem:nth-child(2) {
    flex-grow: 2;
    flex-shrink: 1;
    flex-basis: 0%;
  }
  .bookFormListItem:nth-child(3) {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
  }
  .bookFormListItem:nth-child(4) {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
  } */

  .bookFormListItemTitle {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 2.71;
    color: #898f9f;
    margin: 20px 0px 10px 0px;

    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1280px) {
    }
  }
  .bookFormInput {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 38px;
    width: 270px;
    border: 1px solid #a6abb9;
    padding: 0px 10px;
    margin-bottom: 3px;
  }
  .bookFormInput:hover,
  .bookFormInput:focus {
    border: 1px solid #f6f7fb;
    outline: none;
    box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
  }
  .bookFormError {
    color: #e63946;
    font-size: 13px;
  }
  .wrapper {
    height: 50px;
  }
  .bookFormhelpers {
    @media screen and (max-width: 767px) {
      display: flex;
      flex-direction: column;
    }

    @media screen and (min-width: 768px) and (max-width: 1279px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    @media screen and (min-width: 1280px) {
      display: flex;
      flex-direction: row;
    }
  }
  .bookFormBtn {
    display: flex;
    justify-content: center;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 2.71;
    padding: 0px 58px;
    margin: 35px auto 0px;
    border: 1px solid #242a37;
    background-color: #f6f7fb;
    outline: none;
    height: 40px;

    @media screen and (min-width: 1280px) {
      margin: 36px 0px 0px 41px;
    }
  }
  .bookFormBtn:hover,
  .bookFormBtn:focus {
    color: #f6f7fb;
    background-color: #ff6b08;
    border: 1px solid #f6f7fb;
    outline: none;
  }
  .input0 {
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      width: 594px;
    }
    @media screen and (min-width: 1280px) {
      width: 376px;
    }
  }
  .input1 {
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      width: 250px;
      margin-right: 27px;
    }
    @media screen and (min-width: 1280px) {
      width: 250px;
    }
  }
  .input2 {
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      width: 145px;
      margin-right: 27px;
    }
    @media screen and (min-width: 1280px) {
      width: 130px;
    }
  }
  .input3 {
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      width: 145px;
    }
    @media screen and (min-width: 1280px) {
      width: 134px;
    }
  }
`;

export default Wrapper;
