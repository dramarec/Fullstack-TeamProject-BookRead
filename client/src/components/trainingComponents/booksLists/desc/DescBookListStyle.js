import styled from 'styled-components';

const DescBookListStyle = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  /* outline: 1px solid red; */
  .books-titles {
    color: var(--secondary-text);
    &:before {
      content: '';
      display: block;
      width: 100%;
      /* position: absolute; */
      border-top: 1px solid #e0e5eb;
    }
    &:after {
      content: '';
      display: block;
      width: 100%;
      border-bottom: 1px solid #e0e5eb;
    }
    &__list {
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (min-width: 768px) and (max-width: 1279px) {
        padding-right: 100px;
      }
      padding-right: 160px;
      /* flex-grow: 1; */
    }
  }

  .books-library {
    color: var(--main-text);
    &:after {
      content: '';
      display: block;
      width: 100%;
      border-bottom: 1px solid #e0e5eb;
    }
    margin-bottom: 50px;
    min-height: 60px;
    @media (min-width: 1279px) {
      margin-bottom: 40px;
    }
    &__list {
      padding-top: 20px;
      padding-bottom: 20px;
    }
    &__item {
      /* &:after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        border-bottom: 1px solid #e0e5eb;
      } */
      display: flex;
      padding-right: 40px;
      @media (min-width: 1279px) {
        padding-right: 25px;
      }

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
    &__img {
      margin-right: 17px;
    }
    &__title {
      width: 210px;
    }
    &__author {
      width: 140px;
      flex-grow: 1;
    }
    &__year {
      width: 32px;
      flex-grow: 1;
    }
    &__page {
      width: 24px;
      flex-grow: 1;
    }
    &__card {
    }
  }
`;
export default DescBookListStyle;
