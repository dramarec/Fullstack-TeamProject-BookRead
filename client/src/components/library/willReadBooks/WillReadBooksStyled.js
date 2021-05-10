import styled from 'styled-components';

const ReadingBooksStyled = styled.section`
    background-color: #f6f7fb;
    font-size: 14px;

    .willReadMobil {
        display: flex;
        flex-direction: column;
        width: 270px;
        margin: 0 auto;
    }
    h2 {
        line-height: 2;
        font-family: 'Montserrat-SemiBold';
        font-size: 19px;
    }
    .table-title {
        font-family: 'Montserrat-Medium';
        font-size: 14px;
        display: flex;
        line-height: 38px;
        color: #898f9f;
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
    .listItem {
        display: flex;
        align-items: center;
        padding: 23px 0;
        padding-left: 20px;
        font-family: 'Montserrat-Medium';
        font-size: 14px;
        background-color: #ffffff;
        box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
        margin-bottom: 10px;
        @media screen and (min-width: 768px) {
            padding: 23px 0;
            padding-left: 20px;
            padding-right: 26px;
        }
        @media screen and (min-width: 1280px) {
            padding: 23px 0;
            padding-left: 20px;
        }
    }

    .bookName {
        display: flex;
        align-items: center;
        flex: 2 1 0%;
    }
    .bookName img {
        margin-right: 18px;
    }
    .author {
        @media screen and (min-width: 768px) {
            flex: 1.5 1 0%;
        }
        @media screen and (min-width: 1280px) {
            flex: 2 1 0%;
        }
    }
    .publishYear {
        @media screen and (min-width: 768px) {
            flex: 0.6 1 0%;
        }
        @media screen and (min-width: 1280px) {
            flex: 1 1 0%;
        }
    }
    .pages {
        @media screen and (min-width: 768px) {
            flex: 0 0 0%;
        }
        @media screen and (min-width: 1280px) {
            flex: 1 1 0%;
        }
    }
    .trans {
        .tr-enter {
            opacity: 0;
        }
        .tr-enter-active {
            opacity: 1;
            transform: translateX(100%);
            transition: all 250ms linear;
            // transition: opacity 500ms ease-in;
        }
        .tr-exit {
            opacity: 1;
        }
        .tr-exit-active {
            opacity: 0;
            transform: translateX(-100%);
            transition: all 250ms linear;
        }
    }
`;

export default ReadingBooksStyled;
