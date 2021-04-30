import styled from 'styled-components';

const TrainingPageStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: var(--main-background);

    @media (min-width: 1280px) {
        padding-top: 50px;
    }

    .training {
        width: 886px;
        margin-right: 40px;
    }
    /* background-color: var(--main-background);
  padding-top: 30px;
  @media (min-width: 1280px) {
    padding-top: 50px;
    .container {
      display: flex;
      justify-content: space-around;
    }
  }

  .sidebar {
    order: 1; */
    /* outline: 1px solid red; */
    /* box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
    background-color: #fff;
    width: 270px;
    height: 318px;
    margin-left: auto;
    @media (max-width: 767px) {
      margin-right: auto;
      margin-bottom: 30px;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
      height: 105px;
      width: 100%;
      display: flex;
      align-items: stretch;
      margin-bottom: 40px;
      padding: 20px 45px 8px;
    }
    &-descr {
      padding: 15px 25px;
      height: 60px;
      background: var(--table-title);
      @media (min-width: 768px) and (max-width: 1279px) {
        width: 275px;
        display: inline-block;
        margin-right: auto;
        box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
      }
      &__item {
        text-align: center;
        color: var(--light-text);
        font-size: 20px;
        font-family: 'Montserrat-Medium';
      }
    }
    &-wrap {
      display: flex;
      height: 258px;
      padding: 55px 25px;
      @media (min-width: 768px) and (max-width: 1279px) {
        height: 0;
        padding: 0;
      }
      &__list {
        &:not(:last-child) {
          margin-right: 20px;
          @media (min-width: 768px) and (max-width: 1279px) {
            margin-right: 35px;
          }
        }
      }
      &__item {
        box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
        background-color: var(--box-background);
        font-family: 'OpenSans-Bold';
        text-align: center;
        font-size: 45px;
        width: 100px;
        height: 100px;
        padding: 20px;
        margin-bottom: 14px;
        @media (min-width: 768px) and (max-width: 1279px) {
          margin-bottom: 4px;
          font-size: 40px;
          height: 60px;
          padding: 0;
        }
      }
      &__description {
        font-size: 14px;
        text-align: center;
        color: var(--secondary-text);
        @media (max-width: 767px) {
          width: 90px;
        }
        @media (min-width: 768px) and (max-width: 1279px) {
          font-size: 11px;
        }
      }
    }
  }*/

    .baner {
        width: 100%;
        height: 60px;
        color: #fff;
        font-family: 'Montserrat-Medium';
        font-size: 20px;

        /* font-weight: 600; */
        text-align: center;
        padding: 15px 200px;
        background-color: var(--table-title);
        box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
        margin-bottom: 32px;
        @media (max-width: 767px) {
            display: none;
        }
    }
`;

export default TrainingPageStyled;
