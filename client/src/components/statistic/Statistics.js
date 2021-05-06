import React from 'react';
import { useSelector } from 'react-redux';
import StatisticsItem from './StatisticsItem';
import StatisticsStyled from './StatisticsStyled';

const Statistics = () => {
   const result = useSelector(state => state.training.results);
  return (
    <StatisticsStyled>
      <h1 className="statisticTitle">Статистика</h1>
      <ul className="statisticList"> 
         { result.map(item => 
                    <StatisticsItem key={item._id} item={item} /> )
          }
      </ul>
    </StatisticsStyled>
)
}

export default Statistics;