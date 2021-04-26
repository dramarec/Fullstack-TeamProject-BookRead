import styled from 'styled-components';

const MobBookListStyle = styled.div`
  .books {
    @media (min-width: 767px) {
      display: none;
    }
    font-weight: 500;
    font-size: 12px;
    line-height: 38px;
    color: var(--secondary-text);
    /* outline: 1px solid red; */
    width: 270px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;

    &__img {
      display: inline-block;
      margin-right: 20px;
    }
    &__item {
      padding-left: 40px;
      display: inline-block;
      width: 100px;
    }
    &__item-descr {
    }

    &::before {
      content: '';
      display: inline-block;
      border-top: 1px solid #ccc;
      width: 100%;
      padding-top: 15px;
    }
    &::after {
      content: '';
      display: inline-block;
      border-bottom: 1px solid #ccc;
      width: 100%;
      padding-bottom: 15px;
    }
  }
`;

export default MobBookListStyle;
