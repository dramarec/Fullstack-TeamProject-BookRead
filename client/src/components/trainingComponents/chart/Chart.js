import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Responsive from 'react-responsive';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Legend,
} from 'recharts';
import { getTraining } from '../../../redux/selectors/bookSelector';
import ChartWrapper from './Chart.styled';

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
    const result = training.results?.map(item => {
        return item.date;
    });
    const unique = result => {
        if (result?.length > 0) {
            for (let item of result) {
                if (!plan.includes(item)) {
                    plan.push(item);
                }
            }
            return plan;
        }
    };
    unique(result);

    const fact = data =>
        training.results?.reduce((sum, result) => {
            if (result.date === data) {
                return sum + result.pageCount;
            } else {
                return sum;
            }
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
    const [opacity] = useState({
        ПЛАН: 1,
        ФАКТ: 1,
    });

    const renderColorfulLegendText = value => {
        return <span className="legend">{value}</span>;
    };

    return (
        <ChartWrapper className="chartWrapper">
            <div className="title-wrap">
                <h2 className="title">кiлькiсть сторiнок / день</h2>
                <div className="page-wrap">
                    <span className="pages">{pagesReadPerDay}</span>
                </div>
            </div>
            <Tablet>
                <div className="chart-box">
                    <ResponsiveContainer width="100%" height={245}>
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
                            <XAxis
                                fontSize="12px"
                                marginTop="15px"
                                dataKey="name"
                                tickLine={false}
                            ></XAxis>
                            <YAxis fontSize="12px" />

                            <Legend
                                iconSize={0}
                                layout="vertical"
                                verticalAlign="middle"
                                wrapperStyle={style}
                                formatter={renderColorfulLegendText}
                            />
                        </LineChart>
                    </ResponsiveContainer>

                    <p className="text-x-line">день</p>
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
                            <XAxis
                                dataKey="name"
                                fontSize="10px"
                                tickLine={false}
                            ></XAxis>
                            <YAxis fontSize="10px" />

                            <Legend
                                iconSize={0}
                                layout="vertical"
                                verticalAlign="middle"
                                wrapperStyle={style}
                                formatter={renderColorfulLegendText}
                            />
                        </LineChart>
                    </ResponsiveContainer>

                    <p className="text-x-line">день</p>
                </div>
            </Mobile>
        </ChartWrapper>
    );
};

export default Chart;
