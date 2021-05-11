import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 550px;
    background: #ffffff;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
    padding: 31px 30px;
    margin: 0px auto;

    .bookFormBtnBack {
        display: flex;
        border: none;
        outline: none;
        background-color: inherit;
    }

    .trainingModal {
    }

    .modalImg {
        margin: 15px auto 15px;
        width: 60px;
        height: 60px;
    }
    .modalTitle {
        font-family: 'Montserrat-Regular';
        font-size: 16px;
        line-height: 1.38;
        color: var(--main-text);
        text-align: center;
    }
    .modalBtn {
        display: flex;
        justify-content: center;
        font-family: 'Montserrat-Medium';
        font-size: 14px;
        line-height: 2.71;
        color: var(--light-text);
        padding: 0px 25px;
        margin: 35px auto 0px;
        border: none;
        background-color: var(--accent-color);
        outline: none;
        height: 40px;

        @media screen and (min-width: 1280px) {
            //margin: 36px 0px 0px 41px;
        }
    }
`;

export default Wrapper;
