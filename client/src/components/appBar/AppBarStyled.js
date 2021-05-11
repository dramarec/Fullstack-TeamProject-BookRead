import styled from 'styled-components';

const AppBarStyled = styled.header`
    z-index: 20;
    position: relative;
    font-family: 'Montserrat-Regular';

    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
    .container {
        /* height: 60px; */
        padding: 11px 25px;
    }
    .secondContainer {
        padding: 17px 25px;
    }
    .navlist {
        display: flex;
        align-items: center;
    }
    .navListItem {
        content: '';
        border-right: 1px solid #e0e5eb;
        margin-right: 14px;
    }
    .rightNav {
        display: flex;
        align-items: flex-end;
    }
    .navLink {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 33px;
        height: 33px;
        margin-right: 11px;
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        &:focus,
        &:hover,
        &:active {
            background-color: #f5f7fa;
        }
    }
    .logo {
        flex-grow: 1;
        @media screen and (min-width: 768px) {
            flex-grow: 0;
        }
    }
    .start {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media screen and (min-width: 768px) {
            display: block;
        }
    }

    .logo__descr {
        font-size: 20px;
        line-height: 1.35;
        font-family: 'AbrilFatface-Regular';
    }

    .titleNameWrap {
        display: flex;
        align-items: center;
        order: 1;
        @media screen and (min-width: 768px) {
            order: 0;
            margin-right: auto;
            margin-left: auto;
        }
        &__icon {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            width: 33px;
            height: 33px;
            background-color: #f5f7fa;
            margin-right: 11px;
        }
        &__name {
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            color: #242a37;
            display: block;
            @media screen and (max-width: 767px) {
                display: none;
            }
        }
    }

    .link-btn {
        order: 1;
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .exit {
        font-family: 'Montserrat-Regular';
        font-size: 14px;
        line-height: 2.71;
        text-decoration-line: underline;
        text-underline-offset: 1px;
        text-decoration-thickness: 1px;
        color: var(--main-text);
        background-color: transparent;
        border: 0;
        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
        &:focus,
        &:hover {
            color: #f25137;
        }
    }

    .exit-modal {
        width: 270px;
        height: 223px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: white;
        padding-left: 18px;
        padding-right: 18px;

        p {
            margin-bottom: 20px;
            font-family: 'Montserrat-Regular';
            font-size: 16px;
            font-weight: 700;
            line-height: 22px;

            text-align: center;

            color: #242a37;
        }

        button {
            width: 97px;
            height: 40px;
            padding: 1px, 26px, 1px, 26px;
            font-family: 'Montserrat-Regular';
            font-size: 14px;
            line-height: 38px;

            text-align: center;

            color: #ffffff;
        }

        .cancel {
            margin-right: 15px;
            background-color: white;
            border: solid 1px;
            color: rgba(36, 42, 55, 1);
        }

        .exitBtn {
            background-color: #ff6b08;
            border: solid #ff6b08 1px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        }
    }

    @media screen and (min-width: 768px) {
        .exit-modal {
            width: 390px;
            height: 206px;
            padding-left: 50px;
            padding-right: 50px;

            button {
                width: 130px;
                padding: 1px, 37px, 1px, 37px;
            }
        }
    }
`;
export default AppBarStyled;
