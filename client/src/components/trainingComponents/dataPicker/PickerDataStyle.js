import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    &:first-child {
        margin-right: 45px;
    }
    & svg {
        position: absolute;
        left: 25px;
        top: 12px;
    }
    @media (max-width: 767px) {
        display: none;
    }
    .data-picker {
        border: 1px solid #a6abb9;
        background: transparent;
        padding: 10px 60px;
        outline: none;
        height: 42px;
        width: 100%;
        /* text-align: center; */
        color: var(--third-text);
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
