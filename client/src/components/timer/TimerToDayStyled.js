import styled from 'styled-components';

const TimerToDayStyled = styled.section`
    display: flex;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        margin: 0 auto;
    }
    @media screen and (min-width: 768px) {
        justify-content: center;
        margin: 30px auto 0px;
        width: 610px;
    }
    @media screen and (min-width: 1280px) {
        margin-top: 0px;
        /* margin-bottom: 41px; */
        width: 886px;
    }

    .timerYear {
        @media screen and (max-width: 767px) {
            margin-top: 15px;
        }

        @media screen and (min-width: 768px) {
            margin-right: 68px;
        }
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
        width: 100%;
        padding: 0 30px;
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
