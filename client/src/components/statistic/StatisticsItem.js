import React from 'react';

const StatisticsItem = ({ item }) => {
    const reverseString = str => {
        return str.split('-').reverse().join('.');
    };
    const changedDate = reverseString(item.date);
    //console.log(res);
    return (
        <li className="statisticItem">
            <span className="date">{changedDate}</span>
            <span className="pagesCount">
                {item.pageCount}
                <span className="pagesText">стор.</span>
            </span>
        </li>
    );
};

export default StatisticsItem;
