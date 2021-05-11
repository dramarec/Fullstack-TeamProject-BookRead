import styled from 'styled-components';

const Use = styled.p`
    position: absolute;
    top: 280px;
    right: 286px;
    font: 'Montserrat-Regular';
    font-size: 11px;
    color: yellow;

    @media (min-width: 768px) {
        top: 280px;
        right: 171px;
        color: #e63946;
    }
`;

const Invalid = styled.p`
    position: absolute;
    top: 190px;
    right: 236px;
    font: 'Montserrat-Regular';
    font-size: 11px;
    color: yellow;

    @media (min-width: 768px) {
        color: #e63946;
        right: 116px;
    }
`;

export const UseNotif = () => {
    return <Use>Email in use</Use>;
};

export const InvalidNotif = () => {
    return <Invalid>email or password is wrong</Invalid>;
};
