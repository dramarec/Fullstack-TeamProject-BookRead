import styled from 'styled-components';

const TrainingPageStyled = styled.div`
    background-color: var(--main-background);
    .container {
        display: flex;
        flex-wrap: wrap;
    }
    @media (min-width: 1280px) {
        .containerWrap {
            height: 100vh;
        }
    }
    .topPart1 {
        @media (min-width: 1280px) {
            display: flex;
            flex-direction: row;
            margin-top: 15px;
        }
    }
    .topPart2 {
        @media (min-width: 1280px) {
            display: flex;
            flex-direction: column;
            margin-right: 41px;
        }
    }
    .bottomPart1 {
        @media (min-width: 1280px) {
            display: flex;
            flex-direction: row;
        }
    }

    .topPart {
        display: flex;
        flex-direction: row;
        margin-top: 50px;
    }

    .training {
        @media (max-width: 767px) {
            min-width: 320px;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 60vh;
        }

        @media (min-width: 768px) {
            width: 678px;
            margin-top: 40px;
        }

        @media (min-width: 1280px) {
            width: 886px;
            margin-right: 40px;
            margin-top: 00px;
        }
    }

    .baner {
        display: flex;
        justify-content: center;
        align-items: center;
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
    .trainingModal {
        display: flex;
        flex-direction: column;
        padding: 25px;
        background-color: #f6f7fb;
    }
    .bookFormBtnBack {
        display: flex;
        border: none;
        outline: none;
        background-color: inherit;
    }
`;

export default TrainingPageStyled;
