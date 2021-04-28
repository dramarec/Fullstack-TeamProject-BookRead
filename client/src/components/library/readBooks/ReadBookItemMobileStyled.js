import styled from 'styled-components';

const ReadingBookItemMobileStyled = styled.li`
font-family: 'Montserrat-Medium';
font-size: 12px;
background-color: var(--light-text);
line-height: 38px;
padding: 18px 20px 31px 25px;
box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
margin-bottom: 15px;
.flex {
    display: flex;
    align-items: center;
}
.star-container svg {
    stroke: #FF6B08;
}

.bookName {
    padding: 0 61px 0 20px;
}
.bookName p {
    line-height: 14.6px;
}
.bookName img {
    margin-right: 13px;
}
.title {
color: #898F9F;
padding-left: 35px;
flex: 2 1 0%;
}
.text {
    color: #242A37;
    flex: 2 1 0%;
    }
.review {
    line-height: 0px;
}
.star-ratings {
    flex: 2 1 0%;
}

.review-button {
    padding: 0 34px;
    line-height: 38px;
    background-color: #6D7A8D;
    margin: 0 auto;
    margin-top: 21px;
    display: block;
    font-family: 'Montserrat-Medium';
    color: #FFFFFF;
    font-size: 14px;
    border: none;   
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}

`

export default ReadingBookItemMobileStyled