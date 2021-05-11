import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;

    @media (max-width: 767px) {
        //display: none;
        display: flex;
        //justify-content: center;
    }

    @media (min-width: 768px) {
        &:first-child {
            margin-right: 45px;
        }
    }
    & svg {
        position: absolute;
        left: 25px;
        top: 12px;
    }
    .data-picker {
        border: 1px solid #a6abb9;
        background: transparent;
        padding: 10px 60px;
        outline: none;
        height: 42px;
        width: 270px;
        /* text-align: center; */
        font-family: 'Montserrat-Regular';
        font-size: 14px;
        line-height: 2.71;
        color: var(--third-text);

        @media (max-width: 767px) {
            margin-bottom: 20px;
        }

        @media (min-width: 768px) {
            width: 250px;
        }
        &:focus {
            box-shadow: inset 1px 1px 1px rgba(30, 30, 30, 0.1);
            /* border: 1px solid var(--accent-color); */
        }
    }
`;

export default Wrapper;
