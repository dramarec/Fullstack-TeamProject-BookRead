import styled from 'styled-components';

const ReviewModalStyled = styled.form`
font-family: 'Montserrat-Medium';
background-color: white;
width: 270px;
height: 395px;
padding: 17px 30px 35px 30px;
line-height: 2.38;
font-size: 16px;

@media screen and (min-width: 768px) {
    width: 570px;
    height: 408px;
    padding: 17px 30px 48px 30px;
}

.star-container svg {
    stroke: #FF6B08;
}

.form-control {
width: 210px;
border: 1px solid gray;
@media screen and (min-width: 768px){
width: 510px;
}
}

.button-group {
    display: flex;
    justify-content: center;
    line-height: 2.71;
    position: absolute;
    bottom: 15px;
   @media screen and (min-width: 768px) {
    bottom: 25px;
    right: 150px;
}
}

.button-group .secondButton {
margin-right: 15px;

@media screen and (min-width: 768px) {
margin-right: 30px;
}
}

.button-group button {
width: 97px;
@media screen and (min-width: 768px) {
    width: 130px;
}
}
.current-resume{
    font-style: italic;
    font-size: 14px;
    line-height: 1.5;
}
.review-error{
    font-size: 10px;
    color: red;
    margin-top: -20px;
}
`

export default ReviewModalStyled