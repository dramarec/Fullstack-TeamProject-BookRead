import React from 'react';
import { useSelector } from 'react-redux';
import StatisticsItem from './StatisticsItem';
import StatisticsStyled from './StatisticsStyled';

const Statistics = () => {
    const result = useSelector(state => state.training.results);
    return (
        <StatisticsStyled className="statisticsStyled">
            <h1 className="statisticTitle">Статистика</h1>
            <ul className="statisticList">
                {result
                    .map(item => <StatisticsItem item={item} key={item._id} />)
                    .reverse()}
            </ul>
        </StatisticsStyled>
    );
};

export default Statistics;
