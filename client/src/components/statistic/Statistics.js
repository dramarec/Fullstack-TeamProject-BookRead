import React from 'react';
import StatisticsStyled from './StatisticsStyled';

const Statistics = () => {
 
  return (
    <StatisticsStyled>
      <h1 className="statisticTitle">Статистика</h1>
      <ul className="statisticList"> 
        <li className="statisticItem">
          <span className="date">05.05.2021</span>
          <span className="pagesCount">25</span>
          <span className="pagesText">стор.</span>
        </li>
      </ul>
    </StatisticsStyled>
)
}

export default Statistics;