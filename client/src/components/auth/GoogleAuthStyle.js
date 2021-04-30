import styled from 'styled-components';

const GoogleAuthStyle = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    .google-btn {
        display: inline-block;
        position: relative;
        text-decoration: none;
        width: 150px;
        height: 40px;
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        line-height: 38px;
        font-family: Roboto;
        color: var(--secondary-text);
        background-color: var(--box-background);
        box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15);
        &:hover {
            box-shadow: 0px 2px 2px 1px rgba(9, 30, 63, 0.15);
        }
        &__icon {
            display: inline-block;
            position: absolute;
            left: 14px;
            top: 9px;
        }
    }
`;

export default GoogleAuthStyle;
