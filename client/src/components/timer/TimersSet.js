import React from 'react';
import { useSelector } from 'react-redux';
import TimerToDay from './TimerToDay';
import trainingSelector from '../../redux/selectors/trainingSelector';
import TimerToDayStyled from './TimerToDayStyled';

const TimersSet = () => {
    const endDate = useSelector(trainingSelector.getEndDate);
    const dataStart = useSelector(trainingSelector.getStartDate);
    const data = new Date(new Date().getFullYear(), 11, 31);

    return (
        <TimerToDayStyled className="timerToDayStyled">
            <div className="timerYear">
                <p className="timer-title">До закінчення року залишилось</p>
                <TimerToDay data={data} />
            </div>
            <div>
                <p className="timer-title">До досягнення мети залишилось</p>
                <TimerToDay data={endDate} dataStart={dataStart} />
            </div>
        </TimerToDayStyled>
    );
};

export default TimersSet;
