import styled from 'styled-components';

const MyGoalStyled = styled.div`
margin-bottom: 100px;
width: 270px;
height: 318px;
background-color: #FFFFFF; 
box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
margin-left: auto;
@media screen and (min-width: 768px) and (max-width: 1279px) {
    height: ${(props) => (props.startTraning ? "125px" : "105px")};
    width: 678px;
    padding: 23px 45px 11px 45px;
    padding: ${(props) => (props.startTraning ? "0" : "23px 45px 11px 45px")};
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.startTraning ? "space-around" : "space-between")};
}
@media screen and (min-width: 1280px)  {
    width: 275px;
}
}
.statistic-title {
padding: 11px 0;
line-height: 1.9;
font-size: 20px;
font-family: 'Montserrat-SemiBold';
background-color: var(--table-title);
color: var(--light-text);
text-align: center;
@media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 11px 28px;
}
}
.statistic {
display: flex;
justify-content: center;    
@media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: margin-top: ${(props) => (props.startTraning ? "15px" : "0")};
}
}
.statistic-book {
    margin-right: 20px;
    //flex: 2 1 0;
}
.statistic-day {
    margin-right: 20px;
    //flex: 2 1 0;
}
.statistic__cell
{
    margin-top: ${(props) => (props.startTraning ? "72px" : "55px")};
    margin-bottom: 15px;
    width: ${(props) => (props.startTraning ? "66px" : "100px")};
    height: ${(props) => (props.startTraning ? "66px" : "100px")};
    padding-top: ${(props) => (props.startTraning ? "14px" : "24px")};
    padding-bottom: ${(props) => (props.startTraning ? "14px" : "24px")};
    font-family: 'OpenSans-Bold';
    font-size: ${(props) => (props.startTraning ? "36px" : "45px")};
    line-height: ${(props) => (props.startTraning ? "1.08" : "0.84")};
    background-color: var(--box-background);
    box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
    @media screen and (min-width: 768px) and (max-width: 1279px) {
        width: 100px;
        height: 60px;
        padding: 11px 0;
        margin:0;
    }
}
.statistic-reading .statistic__number {
    color: var(--accent-color)
}
.statistic__number {
    display: block;
    font-family: 'OpenSans-Bold';
    text-align: center;
    @media screen and (min-width: 768px) and (max-width: 1279px) {
        font-size: 40px;
        line-height: 0.95;
    }
}
.statistic__text {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: 'Montserrat-Medium';
    font-size: ${(props) => (props.startTraning ? "12px" : "14px")};
    color: var(--secondary-text);
    @media screen and (min-width: 768px) and (max-width: 1279px) {
        display: flex;
        flex-direction: row;
        font-size: 11px;
    }
}
.statistic-reading .statistic__text {
    @media screen and (min-width: 768px) and (max-width: 1279px) {
        display: flex;
        flex-direction: column;
    }
}
.statistic__text span {
    @media screen and (min-width: 768px) and (max-width: 1279px) {
margin-left: 5px;
}
}
`

export default MyGoalStyled