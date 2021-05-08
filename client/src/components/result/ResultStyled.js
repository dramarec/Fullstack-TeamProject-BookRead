import styled from 'styled-components';

const ResultStyled = styled.div`
    min-width: 270px;
    padding: 10px 17px;
    background-color: #ffffff;

    @media screen and (max-width: 767px) {
        margin: 0 auto;
    }
    @media (min-width: 768px) and (max-width: 1279px) {
        width: 678px;
        padding: 20px 84px;
    }
    @media (min-width: 1280px) {
        width: 275px;
        margin-left: 41px;
        height: 340px;
    }
    .resultsTitle {
        font-weight: 600;
        font-size: 12px;
        line-height: 3.17;
        text-align: center;
        text-transform: uppercase;
    }
    .resultsForm {
        margin-bottom: 24px;
        @media (min-width: 768px) and (max-width: 1279px) {
            display: flex;
            align-items: center;
            margin-bottom: 0px;
        }
        @media (min-width: 1280px) {
            width: 240px;
            margin-bottom: 25px;
        }
    }
    .formGroup {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }
    .inputGroup {
        width: 110px;
        height: 72px;
        position: relative;
    }
    .inputGroup:not(:last-child) {
        margin-right: 20px;
    }
    .formInputDate,
    .pagesInput {
        width: 100%;
        height: 42px;
        padding: 5px 13px;
        font-size: 14px;
        border: 1px solid #a6abb9;
        background-color: #ffffff;
        outline: none;
        &:focus {
            background-color: #ffffff;
            box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
        }
    }
    .label {
        font-weight: 500;
        font-size: 11px;
        line-height: 2.45;
        color: #898f9f;
    }
    .formButton {
        width: 171px;
        height: 42px;
        padding: 5px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        font-weight: 500;
        font-size: 14px;
        line-height: 1.71;
        text-align: center;
        color: #ffffff;
        outline: none;
        cursor: pointer;
        background-color: #ff6b08;
        border: 1px solid #d15807;
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        @media (min-width: 768px) and (max-width: 1279px) {
            width: 240px;
            height: 40px;
            margin: 0;
            margin-left: 30px;
        }
        @media (min-width: 1280px) {
            width: 100%;
            height: 40px;
        }
        &:focus,
        &:hover {
            border-color: #d15807;
            background: #d15807;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        }
    }
    .error {
        position: absolute;
        top: 72px;
        left: 10px;
        color: rgb(225, 22, 22);
        font-size: 10px;
        font-weight: 400;
    }
`;

export default ResultStyled;
