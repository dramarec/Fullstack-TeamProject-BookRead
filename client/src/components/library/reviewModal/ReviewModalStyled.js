import styled from 'styled-components';

const ReviewModalStyled = styled.div`
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

.form-control {
width: 210px;
@media screen and (min-width: 768px){
width: 510px;
}
}

.button-group {
    display: flex;
    justify-content: center;
    line-height: 2.71;
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
`

export default ReviewModalStyled