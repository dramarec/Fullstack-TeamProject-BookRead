import styled from 'styled-components';

const FormTraningStyle = styled.div`
    position: relative;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 73vh;
        width: 73vw;
    }

    .training-form {
        @media (max-width: 767px) {
            width: 270px;
        }

        &__pickers {
            @media (max-width: 767px) {
                display: flex;
                flex-direction: column;
            }
            @media (min-width: 768px) {
                display: flex;
                justify-content: center;
            }
        }
    }
    .training-form__wrap {
        @media (max-width: 767px) {
            display: flex;
            flex-direction: column;
            width: 270px;
        }
        @media (min-width: 768px) {
            display: flex;
            justify-content: center;
            margin-bottom: 25px;
            height: 42px;
        }

        &__pickers {
            display: flex;
            justify-content: center;
        }
    }

    .selectorBooks {
        @media (max-width: 767px) {
            width: 270px;
            font-family: 'Montserrat-Regular';
            font-size: 14px;
            line-height: 2.71;
            color: #a6abb9;
        }

        width: 669px;
        margin-right: 46px;
    }

    .select {
        font-family: 'Montserrat-Regular';
        color: var(--third-text);
        font-size: 14px;
        width: 270px;

        @media (min-width: 768px) {
            width: 482px;
        }
        @media (min-width: 1279px) {
            width: 670px;
        }
        height: 42px;
        padding: 2px 13px;
        border: none;
        background-color: #fff;
        box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
    }

    .bookFormBtn {
        display: flex;
        justify-content: center;
        font-family: 'Montserrat-Medium';
        font-size: 14px;
        line-height: 2.71;
        padding: 0px 58px;
        margin: 0 auto;
        border: 1px solid #242a37;
        background-color: #f6f7fb;
        outline: none;
        height: 42px;

        @media screen and (max-width: 767px) {
            margin-top: 35px;
        }

        @media screen and (min-width: 768px) {
            //margin-top: 40px;
        }
        @media screen and (min-width: 1280px) {
            //margin-top: 40px;
        }

        &:hover,
        &:focus {
            color: #f6f7fb;
            background-color: #ff6b08;
            border: 1px solid #f6f7fb;
            outline: none;
        }
    }

    .FormBtn {
        display: flex;
        justify-content: center;
        font-family: 'Montserrat-Medium';
        font-size: 14px;
        line-height: 2.71;
        padding: 0px 58px;
        margin: 0 auto;
        color: #f6f7fb;
        background-color: #ff6b08;
        border: none;
        outline: none;
        height: 42px;

        @media screen and (max-width: 767px) {
            display: none;
        }

        @media screen and (min-width: 768px) {
            margin-top: 40px;
        }

        &:hover,
        &:focus {
            border: 1px solid #ff6b08;
            background-color: #f6f7fb;
            color: #ff6b08;
            outline: none;
        }
    }
    .error {
        font-family: 'Montserrat-Regular';
        color: #e63946;
        font-size: 11px;
    }
    .error.start {
        position: absolute;
        top: 42px;
        @media screen and (min-width: 768px) {
            left: 60px;
        }
        @media screen and (min-width: 1280px) {
            left: 160px;
        }
    }
    .error.end {
        position: absolute;
        top: 42px;
        @media screen and (max-width: 767px) {
            top: 105px;
        }
        @media screen and (min-width: 768px) {
            right: 110px;
        }
        @media screen and (min-width: 1280px) {
            right: 215px;
        }
    }
    .error.book {
        position: absolute;
        left: 10px;
        @media screen and (max-width: 767px) {
            top: 166px;
        }
        @media screen and (min-width: 768px) {
            bottom: 115px;
        }
        @media screen and (min-width: 1280px) {
            bottom: 115px;
        }
    }
`;

export default FormTraningStyle;
