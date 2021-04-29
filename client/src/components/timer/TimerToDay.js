import React, {useState, useRef, useEffect} from 'react'
import TimerToDayStyled from './TimerToDayStyled'

const TimerToDay = ({data}) => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef()
/*new Date().getFullYear(), 11, 31 'December 31, 2021 00:00:00:00'*/
    const startTimer = () => {
        const countDownDate = new Date(data).getTime();
       
        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDownDate - now
            
            
            const days = Math.floor(distance / (1000 * 60 * 60 *24))
            const hours = Math.floor(distance % (1000 * 60 * 60 *24) / (1000 * 60 * 60))
            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
            const seconds = Math.floor(distance % (1000 * 60) / 1000)
            //console.log(days, '-', hours, '-', minutes, '-', seconds);
            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days)
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds)
            }
        }, 1000)
    }
 

    useEffect(()=>{
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })
    return (
        
        <>
            <div className='timer'>
            <div className='timer-days'>
                    <p className='timer__number'>{String(timerDays).padStart(2, '0')}<span>:</span></p> 
                    <p className='timer__text'><small>ДН</small></p>
                </div>
            <div className='timer-hours'>
                    <p className='timer__number'>{String(timerHours).padStart(2, '0')}<span>:</span></p>
                    <p className='timer__text'><small>ГОД</small></p>
                </div>
               
            <div className='timer-minuters'>
                    <p className='timer__number'>{String(timerMinutes).padStart(2, '0')}<span>:</span></p>
                    <p className='timer__text'><small>ХВ</small></p>
                </div>
            <div className='timer-seconds'>
                <p className='timer__number'>{String(timerSeconds).padStart(2, '0')} </p>
                <p className='timer__text'><small>СЕК</small></p>
            </div>
        </div>
        </>
   
    )
}

export default TimerToDay
