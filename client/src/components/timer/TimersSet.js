import React from 'react';
import { useSelector } from 'react-redux';
import TimerToDay from './TimerToDay';
import TimerToDayStyled from './TimerToDayStyled';
import trainingSelector from '../../redux/selectors/trainingSelector';
//import { getTraining } from '../../redux/selectors/bookSelector'

const TimersSet = () => {
    const endDate = useSelector(trainingSelector.getEndDate);
    const dataStart = useSelector(trainingSelector.getStartDate);
    const data = new Date(new Date().getFullYear(), 11, 31);
    //const isTraining = useSelector(getTraining)
    //const dataEnd ={isTraining.end}
    //console.log('dataStart', dataStart);
     //console.log('endDate', endDate);
    return (
        <TimerToDayStyled>
            <div className="timerYear">
                <p className="timer-title">До закінчення року залишилось</p>
                <TimerToDay data={data /*'December 31, 2021 00:00:00:00'*/} />
            </div>
            <div>
                <p className="timer-title">До досягнення мети залишилось</p>
                <TimerToDay data={endDate} dataStart={dataStart} />
            </div>
        </TimerToDayStyled>
    );
};

export default TimersSet;
