import styled from 'styled-components';

const DescBookListStyle = styled.div`
    @media (min-width: 768px) {
        margin-top: 40px;
    }
    @media (max-width: 767px) {
        display: none;
    }

    @media (min-width: 1280px) {
        width: 880px;
        margin-buttom: 0px;
    }

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
            align-items: center;
            height: 40px;
            @media (min-width: 768px) and (max-width: 1279px) {
                padding-right: 100px;
            }
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

        &__list {
            padding-top: 20px;
            padding-bottom: 20px;
        }
        &__item {
            position: relative;
            &:not(:last-child) {
                padding-bottom: 15px;
                height: 38px;
            }
            display: flex;

            @media (min-width: 1280px) {
                padding-right: 25px;
                align-items: center;
            }
            &:not(:last-child) {
                margin-bottom: 20px;
            }
        }
        &__img {
            margin-right: 17px;
            width: 22px;
            height: 19px;
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
            border: none;
            background-color: inherit;
        }
    }

    .books-titles__list p:nth-child(1) {
        @media screen and (min-width: 768px) {
            white-space: nowrap;
            margin-right: 165px;
        }
        @media screen and (min-width: 1280px) {
            margin-right: 280px;
        }
    }
    .books-titles__list p:nth-child(2) {
        @media screen and (min-width: 768px) {
            margin-right: 146px;
        }
        @media screen and (min-width: 1280px) {
            margin-right: 175px;
        }
    }
    .books-titles__list p:nth-child(3) {
        @media screen and (min-width: 768px) {
            margin-right: 55px;
        }
        @media screen and (min-width: 1280px) {
            margin-right: 90px;
        }
    }
    .books-titles__list p:nth-child(4) {
        @media screen and (min-width: 768px) {
            flex: 0.4 0 0%;
        }
    }
    .books-library__item p:nth-child(2) {
        flex: 3 1 0%;
        margin-right: 13px;
    }
    .books-library__item p:nth-child(3) {
        @media screen and (min-width: 1280px) {
            flex: 2 1 0%;
        }
    }
    .books-library__item p:nth-child(4) {
        @media screen and (min-width: 1280px) {
            flex: 1 1 0%;
        }
    }
    .books-library__item p:nth-child(5) {
        @media screen and (min-width: 1280px) {
            flex: 1 1 0%;
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
        margin: -10px auto 40px;
        background-color: #ff6b08;
        border: 1px solid #f6f7fb;
        color: #f6f7fb;
        outline: none;
        height: 42px;

        &:hover,
        &:focus {
            color: #000;
            border: 1px solid #242a37;
            background-color: #f6f7fb;
            outline: none;
        }
    }
    .helpers {
        display: flex;
    }
    .helpersImg {
        margin-right: 17px;
    }
    .books-library__item.readItem {
        color: var(--secondary-text);
    }

    .scrollbar {
        overflow-y: scroll;
        scroll-behavior: smooth;
    }

    .scrollbar::-webkit-scrollbar {
        visibility: visible;
        width: 5px;
        margin-left: 0;
        background-color: #f5f5f5;
        border-radius: 10px;
    }
    .scrollbar::-webkit-scrollbar-track {
        visibility: visible;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #f5f5f5;
    }
    .scrollbar::-webkit-scrollbar-thumb {
        visibility: visible;
        height: 10px;
        width: 5px;
        background-color: var(--secondary-text);
    }
    .scrollbarText {
        max-height: 173px;
        position: relative;
        overscroll-behavior: contain;
        overflow-y: auto;
        overflow-x: hidden;
        padding-right: 2px;
    }
`;
export default DescBookListStyle;
