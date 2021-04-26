import styled from 'styled-components';

const WillReadBookItemStyled = styled.ul`
  .listItem {
    display: flex;
    align-items: center;
    padding: 23px 0;
    padding-left: 20px;
    font-family: 'Montserrat-Medium';
    font-size: 14px;
    background-color: #ffffff;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
    margin-bottom: 10px;
    @media screen and (min-width: 768px) {
      padding: 23px 0;
      padding-left: 20px;
      padding-right: 26px;
    }
    @media screen and (min-width: 1280px) {
      padding: 23px 0;
      padding-left: 20px;
    }
  }

  .bookName {
    display: flex;
    align-items: center;
    flex: 2 1 0%;
  }
  .bookName img {
    margin-right: 18px;
  }
  .author {
    @media screen and (min-width: 768px) {
      flex: 1.5 1 0%;
    }
    @media screen and (min-width: 1280px) {
      flex: 2 1 0%;
    }
  }
  .publishYear {
    @media screen and (min-width: 768px) {
      flex: 0.6 1 0%;
    }
    @media screen and (min-width: 1280px) {
      flex: 1 1 0%;
    }
  }
  .pages {
    @media screen and (min-width: 768px) {
      flex: 0 0 0%;
    }
    @media screen and (min-width: 1280px) {
      flex: 1 1 0%;
    }
  }
`;

export default WillReadBookItemStyled;
