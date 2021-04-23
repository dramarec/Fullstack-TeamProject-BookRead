import styled from 'styled-components';

const MyGoalStyled = styled.div`
margin-bottom: 100px;
width: 270px;
height: 318px;
background-color: #FFFFFF; 
box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
margin-left: auto;
@media screen and (min-width: 768px) {
    padding: 23px 45px 11px 45px;
    display: flex;
    align-items: center;
    height: 105px;
}
.statistic-title {
padding: 11px 0;
line-height: 1.9;
font-family: 'Montserrat-SemiBold';
background-color: var(--table-title);
color: var(--light-text);
text-align: center;
}
.statistic {
display: flex;
justify-content: center;    
}
.statistic-book {
    margin-right: 20px;
}
.statistic__cell
{
    margin-top: 55px;
    margin-bottom: 15px;
    width: 100px;
    height: 100px;
    padding: 24px 0;
    font-family: 'OpenSans-Bold';
    font-size: 45px;
    background-color: var(--box-background);
    box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
    @media screen and (min-width: 768px) {
        height: 60px;
        padding: 0;
    }
}
.statistic__number {
    display: block;
    font-family: 'OpenSans-Bold';
    font-size: 45px;
    text-align: center;
    @media screen and (min-width: 768px) {
        font-size: 40px;
    }
}
.statistic__text {
    text-align: center;
    font-family: 'Montserrat-Medium';
    font-size: 14px;
    color: var(--secondary-text);
}
`

export default MyGoalStyled