import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;

    padding-top: 52px;
    padding-bottom: 42px;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media screen and (min-width: 768px) and (max-width: 1279px) {
        padding-top: 20px;
        padding-bottom: 40px;
        min-width: 594px;
    }
    @media screen and (min-width: 1280px) {
        min-width: 1117px;
        padding-top: 30px;
    }
    .libraryFormTitle {
        @media screen and (max-width: 767px) {
            font-family: 'Montserrat-Regular';
            font-size: 19px;
            line-height: 2;
            color: #242a37;
            margin-bottom: 20px;
        }
    }

    .libraryFormTitle.hidden {
        visibility: hidden;
        display: none;
    }

    .bookForm {
        @media screen and (max-width: 767px) {
            height: 73vh;
            width: 73vw;
            margin: 0 auto;
            margin-top: 15px;
        }

        @media screen and (min-width: 768px) and (max-width: 1279px) {
            width: 594px;
            margin: 0 auto;
        }
        @media screen and (min-width: 1280px) {
            display: flex;
            flex-direction: row;
            width: 1117px;
        }
    }

    .bookFormModal {
        background-color: #f6f7fb;
        padding: 25px;
        min-width: 320px;
    }

    .bookFormList {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media screen and (min-width: 1280px) {
            flex-direction: row;
        }
    }
    .bookFormListItem {
        @media screen and (max-width: 767px) {
            width: 270px;
        }
    }
    .bookFormListItem:not(:last-child) {
        @media screen and (min-width: 1280px) {
            margin-right: 15px;
        }
    }

    .bookFormListItemTitle {
        font-family: 'Montserrat-Medium';
        font-size: 14px;
        line-height: 2.71;
        color: #898f9f;
        margin: 20px 0px 10px 0px;
    }
    .bookFormInput {
        font-family: 'Montserrat-Regular';
        font-size: 14px;
        line-height: 2.71;
        width: 270px;
        border: 1px solid #a6abb9;
        padding: 0px 10px;
        margin-bottom: 3px;
    }
    .bookFormInput:hover,
    .bookFormInput:focus {
        border: 1px solid #f6f7fb;
        outline: none;
        box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
    }
    .bookFormError {
        font-family: 'Montserrat-Regular';
        color: #e63946;
        font-size: 13px;
    }
    .wrapper {
        height: 50px;
    }
    .bookFormhelpers {
        @media screen and (max-width: 767px) {
            display: flex;
            flex-direction: column;
        }

        @media screen and (min-width: 768px) and (max-width: 1279px) {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        @media screen and (min-width: 1280px) {
            display: flex;
            flex-direction: row;
        }
    }
    .bookFormBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Montserrat-Medium';
        font-size: 14px;
        line-height: 2.71;
        padding: 0px 58px;
        margin: 35px auto 0px;
        border: 1px solid #242a37;
        background-color: #f6f7fb;
        outline: none;
        height: 40px;

        @media screen and (min-width: 1280px) {
            margin: 36px 0px 0px 41px;
        }
    }
    .bookFormBtn:hover,
    .bookFormBtn:focus {
        color: #f6f7fb;
        background-color: #ff6b08;
        border: 1px solid #f6f7fb;
        outline: none;
    }
    .input0 {
        @media screen and (min-width: 768px) and (max-width: 1279px) {
            width: 594px;
        }
        @media screen and (min-width: 1280px) {
            width: 346px;
        }
    }
    .input1 {
        @media screen and (min-width: 768px) and (max-width: 1279px) {
            width: 250px;
            margin-right: 27px;
        }
        @media screen and (min-width: 1280px) {
            width: 250px;
        }
    }
    .input2 {
        @media screen and (min-width: 768px) and (max-width: 1279px) {
            width: 145px;
            margin-right: 27px;
        }
        @media screen and (min-width: 1280px) {
            width: 130px;
        }
    }
    .input3 {
        @media screen and (min-width: 768px) and (max-width: 1279px) {
            width: 145px;
        }
        @media screen and (min-width: 1280px) {
            width: 134px;
        }
    }

    .bookFormBtnBack {
        display: flex;
        border: none;
        outline: none;
        background-color: inherit;
    }
`;

export default Wrapper;
