import styled from 'styled-components';

const MobBookListStyle = styled.div`
    margin: 30px auto;
    .books {
        @media (min-width: 768px) {
            display: none;
        }
        font-weight: 500;
        font-size: 12px;
        line-height: 38px;
        color: var(--secondary-text);
        width: 270px;
        margin-left: auto;
        margin-right: auto;

        &__img {
            width: 20px;
            height: 20px;
            display: inline-block;
            margin-right: 20px;
        }
        &__item {
            padding-left: 40px;
            display: inline-block;
            width: 100px;
            margin-right: 10px;
        }

        &::before {
            content: '';
            display: inline-block;
            border-top: 1px solid #ccc;
            width: 100%;
            padding-top: 15px;
        }
        &::after {
            content: '';
            display: inline-block;
            border-bottom: 1px solid #ccc;
            width: 100%;
            padding-bottom: 15px;
        }
    }

    .helpers {
        display: flex;
        justify-content: space-between;
    }
    .helpers1 {
        display: flex;
        align-items: center;
    }
    .readItem {
        display: flex;
        flex-direction: column;
        color: var(--secondary-text);
    }
    .readItem:not(:last-child) {
        border-bottom: 1px solid #ccc;
    }
    .readItem:not(:first-child) {
        margin-top: 22px;
    }

    .readingItem:not(:last-child) {
        border-bottom: 1px solid #ccc;
    }

    .readingItem:not(:first-child) {
        margin-top: 22px;
    }

    .books__item-descr {
        font-family: 'Montserrat-Regular';
        font-style: 400;

        font-size: 12px;
        line-height: 1.25;
        color: var(--main-text);
    }
    .books-library__card {
        display: flex;
        float: right;
        background-color: inherit;
        outline: none;
        border: none;
    }
`;

export default MobBookListStyle;
