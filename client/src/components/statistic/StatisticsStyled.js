import styled from 'styled-components'

const StatisticsStyled = styled.div`
  .statisticTitle {
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 12px;
    line-height: 2.17;
    text-transform: uppercase;
    color: var(--main-text);
    @media (max-width: 767px) {
      text-align: center;
      &::before,
      &::after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 33%;
        height: 1px;
        background: #e0e5eb;
        border: solid var(--secondary-background);
        border-width: 0 10px;
      }
      &:before {
        margin-left: -100%;
      }
      &:after {
        margin-right: -100%;
      }
    }
    @media (min-width: 768px) and (max-width: 1279px) {
      &::after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 31%;
        height: 1px;
        background: #e0e5eb;
        border: solid var(--secondary-background);
        border-width: 0 8px;
      }
      &:after {
        margin-right: -100%;
      }
    }
    @media (min-width: 1279px) {
      text-align: center;
      &::before,
      &::after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 33%;
        height: 1px;
        background: #e0e5eb;
        border: solid var(--secondary-background);
        border-width: 0 10px;
      }
      &:before {
        margin-left: -100%;
      }
      &:after {
        margin-right: -100%;
      }
    }
  }
  .statisticList {
    overflow-y: auto;
    @media (max-width: 767px) {
      height: 110px;
    }
    @media (min-width: 768px) and (max-width: 1279px) {
      width: 250px;
      height: 157px;
    }
    @media (min-width: 1280px) {
      height: 110px;
    }
  }
  .statisticItem {
    list-style: none;
    display: flex;
    justify-content: space-around;
    @media (min-width: 768px) and (max-width: 1279px) {
      justify-content: space-between;
      margin-right: 8px;
    }
  }
  .date,
  .pagesCount,
  .pagesText {
    font-size: 14px;
    line-height: 1.71;
    text-align: right;
    color: var(--main-text);
  }
  .pagesText {
    color: var(--secondary-text);
  }
  // css transition styles
  .statisticListItem-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  .statisticListItem-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 250ms linear;
  }
`
export default StatisticsStyled