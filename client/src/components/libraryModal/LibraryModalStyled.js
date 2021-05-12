import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 270px;
    background: #ffffff;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
    margin: 0px auto;

    @media screen and (min-width: 768px) {
        width: 570px;
        height: 270px;
        padding-top: 15px;
        padding-left: 30px;
    }

    .libraryModal {
        display: flex;
        flex-direction: column;
        width: 270px;
        background: #ffffff;
        box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
        padding: 31px 15px 0px 15px;
        margin: 0px auto;
    }

    .listItem {
        font-family: 'Montserrat-SemiBold';
        color: #242a37;
        font-size: 18px;
        line-height: 2.11;

        @media screen and (min-width: 768px) {
            font-size: 19px;
            line-height: 2;
        }
    }
    .listItem:not(:last-child) {
        margin-bottom: 20px;
    }
    .listItemPart1 {
        display: flex;
        flex-direction: row;
    }
    .listItemImgPart1 {
        margin-right: 9px;
    }
    .listItemTitlePart1 {
        font-family: 'Montserrat-SemiBold';
        color: #242a37;
        font-size: 14px;
        line-height: 1.21;

        @media screen and (min-width: 768px) {
            font-size: 16px;
            line-height: 2.38;
        }
    }
    .listItemPart2 {
        display: flex;
        flex-direction: row;
        margin-left: 31px;
        margin-top: 8px;

        @media screen and (min-width: 768px) {
            margin-top: -15px;
        }
    }
    .listItemImgPart2 {
        margin-right: 9px;
    }
    .listItemTitlePart2 {
        font-family: 'Montserrat-Regular';
        color: #898f9f;
        font-size: 14px;
        line-height: 1.21;

        @media screen and (min-width: 768px) {
            font-size: 14px;
            line-height: 2.71;
        }
    }

    .listBtn {
        font-family: 'Montserrat-Medium';
        font-size: 14px;
        line-height: 2.71;
        color: #ffffff;
        padding: 1px 52px 1px 54px;
        background-color: #ff6b08;
        outline: none;
        border: none;
        margin: 25px auto 38px;
    }

    .listBtn:focus {
        background-color: #ffffff;
        color: #ff6b08;
        outline: none;
        border: 1px solid #ff6b08;
    }
`;

export default Wrapper;
