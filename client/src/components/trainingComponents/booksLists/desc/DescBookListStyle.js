import styled from 'styled-components';

const DescBookListStyle = styled.div`
    @media (max-width: 767px) {
        display: none;
    }
    /* outline: 1px solid red; */
    .books-titles {
        color: var(--secondary-text);
        &:before {
            content: '';
            display: block;
            width: 100%;
            border-top: 1px solid #e0e5eb;
        }
        &:after {
            content: '';
            display: block;
            width: 100%;
            border-bottom: 1px solid #e0e5eb;
        }
        &__list {
            display: flex;
            /* justify-content: space-between; */
            align-items: center;
            height: 40px;
            @media (min-width: 768px) and (max-width: 1279px) {
                padding-right: 100px;
            }
            padding-right: 160px;
        }
        &__item {
            &:first-child {
                margin-right: 150px;
                & > p {
                    width: 120px;
                }
            }
            &:nth-child(2) {
                margin-right: 130px;
            }
            &:nth-child(3) {
                margin-right: 60px;
            }
            /* &:nth-child(2n + 1) {
                flex-grow: 2;
                color: red;
            }
            &:nth-child(even) {
                flex-grow: 1;
            } */
        }
    }

    .books-library {
        color: var(--main-text);
        &:after {
            content: '';
            display: block;
            width: 100%;
            border-bottom: 1px solid #e0e5eb;
        }
        margin-bottom: 50px;
        min-height: 60px;
        @media (min-width: 1279px) {
            margin-bottom: 40px;
        }
        &__list {
            padding-top: 20px;
            padding-bottom: 20px;
        }
        &__item {
            position: relative;
            &:not(:last-child) {
                border-bottom: 1px solid #e0e5eb;
                padding-bottom: 15px;
                height: 38px;
            }
            display: flex;
            align-items: center;
            padding-right: 40px;
            @media (min-width: 1279px) {
                padding-right: 25px;
            }
            &:not(:last-child) {
                margin-bottom: 20px;
            }
        }
        &__img {
            margin-right: 17px;
        }
        &__title {
            width: 230px;
        }
        &__author {
            width: 110px;
            flex-grow: 1;
        }
        &__year {
            width: 32px;
            flex-grow: 1;
        }
        &__page {
            width: 24px;
            flex-grow: 1;
        }
        &__card {
        }
    }
    .bookFormBtn {
        display: flex;
        justify-content: center;
        font-family: 'Montserrat-Medium';
        font-size: 14px;
        line-height: 2.71;
        padding: 0px 58px;
        margin: -10px auto 40px;
        background-color: #ff6b08;
        border: 1px solid #f6f7fb;
        color: #f6f7fb;
        outline: none;
        height: 42px;

        /* @media screen and (min-width: 1280px) {
      margin: 36px 0px 0px 41px;
    } */
        &:hover,
        &:focus {
            color: #000;
            border: 1px solid #242a37;
            background-color: #f6f7fb;
            outline: none;
        }
    }
`;
export default DescBookListStyle;
