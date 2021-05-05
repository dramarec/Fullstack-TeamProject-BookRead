import React from 'react'

const StatisticList = ({date, pages}) => (
  <li className="statisticItem">
    <span className="date">{date?.split('-').reverse().join('.')}</span>
    <span className="pagesCount">{pages}</span>
    <span className="pagesText">стор.</span>
  </li>
)

export default StatisticList;