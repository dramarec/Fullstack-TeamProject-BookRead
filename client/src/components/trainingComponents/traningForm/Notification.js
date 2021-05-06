import styled from 'styled-components';

const P = styled.p`
    position: absolute;
    top: 42%;
    right: 32%;
    font: 'Montserrat-Regular';
    font-size: 11px;
    color: #e63946;

    @media (min-width: 768px) {
        top: 13%;
        right: 53%;
    }
`;

export const Notif = () => {
    return <P>Ви вже обрали цю книжку</P>;
};
