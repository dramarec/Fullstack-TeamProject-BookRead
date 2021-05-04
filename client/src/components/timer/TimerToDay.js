import React, { useState, useRef, useEffect } from 'react';

const TimerToDay = ({ data, dataStart }) => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    //const [isActive, setIsActive] = useState(false);

    let interval = useRef();
    /*new Date().getFullYear(), 11, 31 'December 31, 2021 00:00:00:00'*/
    const startTimer = () => {
        
        const countDownDate = new Date(data).getTime();
        //console.log('countDownDate', countDownDate);
        //console.log('now', now );
        
        interval = setInterval(() => {
            //console.log(Date().getTime());
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60),
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            //console.log(days, '-', hours, '-', minutes, '-', seconds);
            if (distance < 0) {
                clearInterval(distance);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => 
            clearInterval(interval);
        
    });
  

   
    return (
        <>
            <div className="timer">
                <div className="timer-days">
                    <p className="timer__number">
                        {String(timerDays).padStart(2, '0')}
                        <span>:</span>
                    </p>
                    <p className="timer__text">
                        <small>ДН</small>
                    </p>
                </div>
                <div className="timer-hours">
                    <p className="timer__number">
                        {String(timerHours).padStart(2, '0')}
                        <span>:</span>
                    </p>
                    <p className="timer__text">
                        <small>ГОД</small>
                    </p>
                </div>

                <div className="timer-minuters">
                    <p className="timer__number">
                        {String(timerMinutes).padStart(2, '0')}
                        <span>:</span>
                    </p>
                    <p className="timer__text">
                        <small>ХВ</small>
                    </p>
                </div>
                <div className="timer-seconds">
                    <p className="timer__number">
                        {String(timerSeconds).padStart(2, '0')}{' '}
                    </p>
                    <p className="timer__text">
                        <small>СЕК</small>
                    </p>
                </div>
            </div>
        </>
    );
};

export default TimerToDay;

/*import React, { useState, useRef, useEffect } from 'react';

const TimerToDay = ({ data, dataStart }) => {
 const /*[countdownDate, setCountdownDate] = useState(=new Date(data).getTime()//);
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, [1000]);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      /*const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
    };*/