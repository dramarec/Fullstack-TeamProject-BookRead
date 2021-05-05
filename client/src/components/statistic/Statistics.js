import React from 'react';
import { useSelector } from 'react-redux';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import trainingSelector from '../../redux/selectors/trainingSelector';
import StatisticsStyled from './StatisticsStyled';
import StatisticList from './StatisticList'

const Statistics = () => {
    const statistic = useSelector(trainingSelector)
    const statisticSorted = statistic
    ?.slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))

    return (
        <StatisticsStyled>
           <TransitionGroup component="ul" className="statisticList">
        {statisticSorted?.map(item => (
          <CSSTransition
            key={item._id}
            timeout={250}
            classNames="statisticListItem"
          >
            <StatisticList {...item} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </StatisticsStyled>
)
}

export default Statistics;