
import React, { useState, useCallback } from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    Tooltip,
    Legend
} from 'recharts';
import ChartWrapper from './Chart.styled';


const data = [
    { name: 'Page A', ПЛАН: 570, ФАКТ: 400 },
    { name: 'Page B', ПЛАН: 290, ФАКТ: 450 },
    { name: 'Page C', ПЛАН: 880, ФАКТ: 720 },
    { name: 'Page D', ПЛАН: 260, ФАКТ: 390 }]

const style = {
    top: 100,
    right: 0,
    marginBottom: 10,
    fontSize: "12px",
    lineHeight: "24px",
};

const Chart = () => {

    const [opacity, setOpacity] = useState({
        ПЛАН: 1,
        ФАКТ: 1

    });

    const handleMouseEnter = useCallback(
        (o) => {
            const { dataKey } = o;
            setOpacity({ ...opacity, [dataKey]: 0.5 });
        },
        [opacity, setOpacity]
    );

    const handleMouseLeave = useCallback(
        (o) => {
            const { dataKey } = o;
            setOpacity({ ...opacity, [dataKey]: 1 });
        },
        [opacity, setOpacity]
    );

    const renderColorfulLegendText = (value: string) => {
        return <span className="legend">{value}</span>
    };

    return (
        <div className='container'>
            <ChartWrapper>
                <div className='title-wrap'>
                    <h2 className='title'>кiлькiсть сторiнок / день</h2>
                    <div className='page-wrap'>
                        <span className='pages'>34</span>
                    </div>
                </div>
                <div className='chart-box'>
                    <ResponsiveContainer width="100%" height={290}>
                        <LineChart
                            data={data}
                            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

                            <Line type="monotone"
                                dataKey="ПЛАН"
                                stroke="#091E3F"
                                fill="#091E3F"
                                strokeOpacity={opacity.ПЛАН}
                                strokeWidth={2}
                                activeDot={{ r: 8 }} />
                            <Line type="monotone"
                                dataKey="ФАКТ"
                                stroke="#FF6B08"
                                fill="#FF6B08"
                                strokeOpacity={opacity.ФАКТ}
                                strokeWidth={2}
                                activeDot={{ r: 8 }} />
                            <CartesianGrid horizontal={false} stroke="#ccc" />
                            <XAxis dataKey="none"
                                tickLine={false}>
                            </XAxis>
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

                    <p className='text-x-line'>час</p>
                </div>
            </ChartWrapper>
        </div >
    )
}

export default Chart