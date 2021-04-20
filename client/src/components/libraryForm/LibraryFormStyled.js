import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f7fb;
  padding-top: 52px;
  padding-bottom: 109px;

  @media screen and (min-width: 768px) {
    padding-top: 20px;
    min-width: 594px;
  }
  @media screen and (min-width: 1280px) {
  }
  .bookForm {
  }
  .bookFormList {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1280px) {
    }
  }
  .bookFormListItem {
    width: 270px;
  }
  .bookFormListItem:not(:last-child) {
    margin-right: 15px;
  }
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
  }
  .bookFormInput:hover,
  .bookFormInput:focus {
    border: none;
    box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
  }
  .bookFormError {
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
  }
  .bookFormBtn:hover,
  .bookFormBtn:focus {
    color: #f6f7fb;
    background-color: #ff6b08;
    border: 1px solid #f6f7fb;
    outline: none;
  }
`;

export default Wrapper;
