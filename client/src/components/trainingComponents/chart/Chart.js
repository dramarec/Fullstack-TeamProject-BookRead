import React, { useState, useCallback } from 'react';
import Responsive from 'react-responsive';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts';
import { getTraining } from '../../../redux/selectors/bookSelector';
import ChartWrapper from './Chart.styled';
import { useSelector } from 'react-redux';



const style = {
    top: 100,
    right: 0,
    marginBottom: 10,
    fontSize: '12px',
    lineHeight: '24px',
};

const Chart = () => {
    const Tablet = props => <Responsive {...props} minWidth={768} />;
    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    const training = useSelector(getTraining);
 
    const plan = [];
    const result = training.results?.map(item => {return item.date });
    for (let i = 0; i < result?.length; i++) {
     result[i] != result[i - 1]  && plan.push(result[i])
    }
 
    const fact = (data) => training.results?.reduce((sum, result) => {
    if(result.date === data) {
       return sum + result.pageCount;
     } else{
        return sum
    }; 
  }, 0);
  
  const pagesReadPerDay = training.pagesReadPerDay;

  const data = [];
    for (let num = 0; num <= training?.duration; num++) {
        data.push({
            name: plan[num],
            ПЛАН: pagesReadPerDay,
            ФАКТ: fact(plan[num]),
        });
    }
    const [opacity, setOpacity] = useState({
        ПЛАН: 1,
        ФАКТ: 1,
    });

    
    /*const handleMouseEnter = useCallback(
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
    );*/

    const renderColorfulLegendText = value => {
        return <span className="legend">{value}</span>;
    };

    return (
        // <div >
        <ChartWrapper>
            <div className="title-wrap">
                <h2 className="title">кiлькiсть сторiнок / день</h2>
                <div className="page-wrap">
                    <span className="pages">{pagesReadPerDay}</span>
                </div>
            </div>
            <Tablet>
                <div className="chart-box">
                    <ResponsiveContainer width="100%" height={290}>
                        <LineChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 20,
                                bottom: 5,
                                left: 0,
                            }}
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
            </Tablet>
            <Mobile>
                <div className="chart-box">
                    <ResponsiveContainer width="100%" height={190}>
                        <LineChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 20,
                                bottom: 0,
                                left: 0,
                            }}
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
                            <XAxis dataKey="name" tickLine={false}></XAxis>
                            <YAxis />
                            <Tooltip />

                            <Legend
                                //onMouseEnter={handleMouseEnter}
                                //onMouseLeave={handleMouseLeave}
                                iconSize={0}
                                layout="vertical"
                                verticalAlign="middle"
                                wrapperStyle={style}
                                formatter={renderColorfulLegendText}
                            />
                        </LineChart>
                    </ResponsiveContainer>

                    <p className="text-x-line">day</p>
                </div>
            </Mobile>
        </ChartWrapper>
        // </div>
    );
};

export default Chart;
