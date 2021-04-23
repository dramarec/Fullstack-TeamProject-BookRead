import styled from 'styled-components';

const TrainingPageStyled = styled.div`
  background-color: var(--main-background);
  padding-top: 30px;
  .wrapper {
    padding: 15px 25px;
    width: 270px;
    height: 60px;
    background: var(--table-title);
    margin-left: auto;
    margin-right: auto;
  }

  .titleTodo {
    text-align: center;
    color: var(--light-text);
    font-size: 20px;
    font-family: 'Montserrat-Medium';
  }
  .sidebarWrap {
    display: flex;
    justify-content: space-between;
    width: 270px;
    height: 258px;
    margin-bottom: 30px;
    background-color: #fff;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
    padding: 55px 25px;
    margin-left: auto;
    margin-right: auto;
    &__item {
      font-family: 'OpenSans-Bold';
      width: 100px;
      height: 100px;
      font-size: 45px;
      padding: 20px;
      text-align: center;
      margin-bottom: 14px;
      background-color: var(--box-background);
      box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
    }
    &__description {
      text-align: center;
    }
  }
`;

export default TrainingPageStyled;
