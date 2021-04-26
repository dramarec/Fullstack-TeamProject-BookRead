import styled from 'styled-components';

const AppBarStyled = styled.div`
  /* outline: 1px solid tomato; */
  z-index: 20;
  position: relative;

  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  .container {
    width: 100%;
    height: 60px;
    padding: 11px 25px;
  }
  .navigation {
  }
  .navlist {
    display: flex;
    align-items: baseline;
  }
  .navListItem {
    content: '';
    border-right: 1px solid #e0e5eb;
    margin-right: 14px;
  }
  .rightNav {
    display: flex;
    align-items: center;
  }
  .navLink {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 33px;
    height: 33px;
    margin-right: 11px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:focus,
    &:hover,
    &:active {
      background-color: #f5f7fa;
    }
  }

  .logoDescr {
    font-size: 20px;
    font-family: 'AbrilFatface-Regular';
  }

  .titleNameWrap {
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 33px;
      height: 33px;
      background-color: #f5f7fa;
      margin-right: 11px;
    }
    &__name {
      font-family: 'Montserrat-Regular';
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      color: #242a37;
      display: block;
      @media screen and (max-width: 767px) {
        display: none;
      }
    }
  }

  .exit {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border-bottom: 1px solid #242a37;
    &:hover {
      border-bottom: 1px solid #fff;
    }
  }
`;
export default AppBarStyled;
