import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 270px;
  padding-top: 52px;

  @media screen and (min-width: 768px) {
    padding-top: 20px;
    min-width: 594px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 39px;
  }
  .bookForm {
  }
  .bookFormList {
  }
  .bookFormListItem {
  }
  .bookFormListItemTitle {
    white-space: nowrap;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 38px;
    color: #898f9f;
    padding-bottom: 10px;

    @media screen and (min-width: 768px) {
      padding-bottom: 19.5px;
    }
    @media screen and (min-width: 1280px) {
    }
  }
  .bookFormInput {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .bookFormError {
  }
  .bookFormBtn {
  }
`;

export default Wrapper;
