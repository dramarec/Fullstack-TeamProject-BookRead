import styled from 'styled-components';

const TraningMadalStyled = styled.div`
    position: relative;
    margin: 0 auto;
    .training {
        @media (max-width: 767px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 60vh;
            //width: 73vw;
        }
    }

    .baner {
        width: 270px;
        height: 60px;
        color: #fff;
        font-family: 'Montserrat-Medium';
        font-size: 20px;

        line-height: 1.9;
        text-align: center;
        padding: 11px 47px;
        background-color: var(--table-title);
        box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
        margin: 62px auto 20px;

        @media (min-width: 768px) {
            width: 100%;
            padding: 15px 200px;
            margin: 0px auto 32px;
        }
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
            color: var(--main-text);
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

    .formBtn {
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
            //display: none;
            margin-bottom: 40px;
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
        top: 222px;
    }
    .error.end {
        position: absolute;
        top: 285px;
    }
    .error.book {
        position: absolute;
        bottom: 183px;
    }
`;

export default TraningMadalStyled;
