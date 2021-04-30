import styled from 'styled-components';

const TimerToDayStyled = styled.section`
    display: flex;
    justify-content: center;
    margin-bottom: 41px;
    width: 886px;
    .timerYear {
        margin-right: 68px;
    }
    .timer-title {
        font-family: 'Montserrat-Regular';
        text-align: center;
        font-size: 14px;
        line-height: 2.71;
    }
    .timer {
        display: flex;
        justify-content: center;
        width: 290px;
        height: 60px;
        background-color: var(--light-text);
        box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
    }

    .timer__number {
        font-family: 'OpenSans-Bold';
        font-size: 25px;
        line-height: 1.52;
    }
    .timer span {
        font-family: 'OpenSans-Bold';
        font-size: 25px;
        line-height: 1.52;
        margin: 10px;
    }
    .timer__text {
        font-family: 'Montserrat-Regular';
        font-size: 10px;
    }
`;

export default TimerToDayStyled;
