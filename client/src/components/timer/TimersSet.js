import React from 'react'
import TimerToDay from './TimerToDay'
import TimerToDayStyled from './TimerToDayStyled'

const TimersSet = () => {
    const data = new Date(new Date().getFullYear(), 11, 31)
    console.log(data);
    return (
        <TimerToDayStyled>
            <div>
            <p className='timer-title'>До закінчення року залишилось</p>
           <TimerToDay data={data/*'December 31, 2021 00:00:00:00'*/}/>
            </div>
            <div>
            <p className='timer-title'>До досягнення мети залишилось</p>
            <TimerToDay data={'May 25, 2021 00:00:00:00'}/>
            </div>
        </TimerToDayStyled>
    )
}

export default TimersSet
