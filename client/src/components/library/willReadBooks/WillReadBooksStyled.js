import styled from 'styled-components';

const ReadingBooksStyled = styled.section`
background-color: #F6F7FB;
font-size: 14px;

h2 {
    line-height: 38px;
    font-family: 'Montserrat-SemiBold';
    font-size: 19px
}
.table-title {
    font-family: 'Montserrat-Medium';
    font-size: 14px;
    display: flex;
    line-height: 38px;
    color: #898F9F;
}
.table-title p:nth-child(1) {
    flex: 2 1 0%;
}
.table-title p:nth-child(2) {
    @media screen and (min-width: 768px) {
        flex: 1.3 1 0%; 
      }
    @media screen and (min-width: 1280px) {
        flex: 2 1 0%; 
    }
}
.table-title p:nth-child(3) {
    @media screen and (min-width: 768px) {
        flex: 0.5 1 0%; 
      }
    @media screen and (min-width: 1280px) {
        flex: 1 1 0%; 
    }
}
.table-title p:nth-child(4) {
    @media screen and (min-width: 768px) {
        flex: 0.4 0 0%; 
      }
    @media screen and (min-width: 1280px) {
        flex: 1 1 0%; 
    }
}




`

export default ReadingBooksStyled