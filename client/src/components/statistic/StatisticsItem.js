import React from 'react'

const StatisticsItem = ({item}) => {
    return (
        <li className="statisticItem">
          <span className="date">{item.date}</span>
          <span className="pagesCount">{item.pageCount}</span>
          <span className="pagesText">стор.</span>
        </li>
    )
}

export default StatisticsItem
