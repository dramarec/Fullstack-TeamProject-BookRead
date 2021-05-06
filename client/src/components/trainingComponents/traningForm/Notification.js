import styled from 'styled-components';

const P = styled.p`
    position: absolute;
    top: 13%;
    right: 53%;
    font: 'Montserrat-Regular';
    font-size: 11px;
    color: #e63946;
`;

export const Notif = () => {
    return <P>Ви вже обрали цю книжку</P>;
};
