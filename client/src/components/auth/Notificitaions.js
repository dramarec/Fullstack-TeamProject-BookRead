import styled from 'styled-components';

const Use = styled.p`
    position: absolute;
    top: 44px;
    right: 100px;
    font: 'Montserrat-Regular';
    font-size: 11px;
    color: yellow;

    @media (min-width: 768px) {
        top: 48px;
        right: 100px;
        color: #e63946;
    }
`;

const Invalid = styled.p`
    position: absolute;
    top: 48px;
    right: 51px;
    font: 'Montserrat-Regular';
    font-size: 11px;
    color: yellow;

    @media (min-width: 768px) {
        color: #e63946;
    }
`;

export const UseNotif = () => {
    return <Use>Email in use</Use>;
};

export const InvalidNotif = () => {
    return <Invalid>email or password is wrong</Invalid>;
};
