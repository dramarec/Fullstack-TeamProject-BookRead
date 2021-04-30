import React, { useState, useCallback } from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    Tooltip,
    Legend,
} from 'recharts';
import { getTraining } from '../../../redux/selectors/bookSelector';
import ChartWrapper from './Chart.styled';
import { useSelector } from 'react-redux';


/*const data = [
  { name: 'Day 1', ПЛАН: 570, ФАКТ: 400 },
  { name: 'Day 2', ПЛАН: 290, ФАКТ: 450 },
  { name: 'Day 3', ПЛАН: 880, ФАКТ: 720 },
  { name: 'Day 4', ПЛАН: 260, ФАКТ: 390 },
];*/

const data = [];
for (let num=0; num <= 10; num++) {
  data.push({
    name: num,
    ПЛАН: 34,
    ФАКТ: 0
  })
}

const style = {
    top: 100,
    right: 0,
    marginBottom: 10,
    fontSize: '12px',
    lineHeight: '24px',
};

const Chart = () => {
  const training = useSelector(getTraining)
  const result = training.results.map(item => {
    console.log(item, "item from RESULTS");
    return [item.pageCount];
});
console.log("training", result);
 
  const data = [];
  for (let num=0; num <= training.duration; num++) {
    data.push({
      name: num,
      ПЛАН: 34,
      ФАКТ: result[num]
    })
  }
  const [opacity, setOpacity] = useState({
    ПЛАН: 1,
    ФАКТ: 1,
  });

    const start = training.start;
    const end = training.end;
    const duration = training.duration;
    const pagesReadPerDay = training.pagesReadPerDay;
    const totalPages = training.totalPages;
    const books = training.books;
    const results = training.results.map(item => {
        console.log(item, 'item from RESULTS');
        return {
            date: item.date,
            pageCount: item.pageCount,
        };
    });

    console.log(
        start,
        end,
        duration,
        pagesReadPerDay,
        totalPages,
        books,
        results,
        'TRAINinG!',
    );

    const data = [
        { name: 'Training', ПЛАН: 570, ФАКТ: 400 },
        { name: 'Day 2', ПЛАН: 290, ФАКТ: 450 },
        { name: 'Day 3', ПЛАН: 880, ФАКТ: 720 },
        { name: 'Day 4', ПЛАН: 260, ФАКТ: 390 },
    ];

    const [opacity, setOpacity] = useState({
        ПЛАН: 1,
        ФАКТ: 1,
    });

    const handleMouseEnter = useCallback(
        o => {
            const { dataKey } = o;
            setOpacity({ ...opacity, [dataKey]: 0.5 });
        },
        [opacity, setOpacity],
    );

    const handleMouseLeave = useCallback(
        o => {
            const { dataKey } = o;
            setOpacity({ ...opacity, [dataKey]: 1 });
        },
        [opacity, setOpacity],
    );

    const renderColorfulLegendText = value => {
        return <span className="legend">{value}</span>;
    };

    return (
        <div /* className="container" */>
            <ChartWrapper>
                <div className="title-wrap">
                    <h2 className="title">кiлькiсть сторiнок / день</h2>
                    <div className="page-wrap">
                        <span className="pages">{pagesReadPerDay}</span>
                    </div>
                </div>
                <div className="chart-box">
                    <ResponsiveContainer width="100%" height={290}>
                        <LineChart
                            data={data}
                            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                        >
                            <Line
                                type="monotone"
                                dataKey="ПЛАН"
                                stroke="#091E3F"
                                fill="#091E3F"
                                strokeOpacity={opacity.ПЛАН}
                                strokeWidth={2}
                                activeDot={{ r: 8 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="ФАКТ"
                                stroke="#FF6B08"
                                fill="#FF6B08"
                                strokeOpacity={opacity.ФАКТ}
                                strokeWidth={2}
                                activeDot={{ r: 8 }}
                            />
                            <CartesianGrid horizontal={false} stroke="#ccc" />
                            <XAxis dataKey="none" tickLine={false}></XAxis>
                            <Tooltip />

                            <Legend
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                iconSize={0}
                                layout="vertical"
                                verticalAlign="middle"
                                wrapperStyle={style}
                                formatter={renderColorfulLegendText}
                            />
                        </LineChart>
                    </ResponsiveContainer>

                    <p className="text-x-line">час</p>
                </div>
            </ChartWrapper>
        </div>
    );
};

export default Chart;
