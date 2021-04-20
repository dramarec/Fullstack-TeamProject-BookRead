import styled from 'styled-components';
import myimg from "./authPhoto/mobile-min.png"
const AuthFormStyled = styled.div`
    
    max-width: 382px;
    background-color: rgba(9, 30, 63, 0.8);
    //background-image: url(${myimg});
    .btn-google{
    font-weight: bold;
    font-size: 16px;
    line-height: 38px;
    text-align: center;
    color: #707375;
    //background: #F5F7FA;
    width:150px;
    height:50px;
    }
    @media (min-width: 768px) {
        max-width: 382px;
    }
    .authFormTitle {
        margin-top: 0;
        margin-bottom: 80px;
        font-family: 'Gotham Pro', sans-serif;
        font-weight: 700;
        font-size: 14px;
        line-height: 1.93;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--accent-color);
        @media (max-width: 767px) {
            text-align: center;
        }
        @media (min-width: 768px) and (max-width: 1279px) {
            margin-bottom: 60px;
        }
    }
    .authForm {
        display: flex;
        flex-direction: column;
    }
    .authFormFild {
        position: relative;
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
        font-size: 14px;
        line-height: 1.21;
        letter-spacing: 0.04em;
    }
    .authFormText {
        position: absolute;
        margin: 0;
        padding: 0;
        left: 0;
        top: -15px;
        font-weight: 700;
        /* transition: 0.3s; */
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .authFormInput {
        padding: 5px 0;
        width: 100%;
        font-size: 16px;
        line-height: 1.21;
        letter-spacing: 0.04em;
        border: none;
        background-color: transparent;
        border-bottom: 1px solid var(--header-border);
        outline: none;
         width: 270px;
         height: 42px;
         
        &:focus,
        &:hover {
            border-color: var(--accent-color);
        }
    }
    .authInputError {
        border-bottom: 1px solid #e11616;
    }
    .authError {
        position: absolute;
        top: 34px;
        left: 0;
        color: #e11616;
        font-size: 12px;
    }
    .authFormInput:not(:placeholder-shown) ~ .authFormText {
        top: -20px;
        font-size: 12px;
    }
    .authFormBtn {
        margin: 0 auto;
        background-color: #FF6B08;
        color: #ffffff;
        width: 270px;
        height: 60px;
    }
    @media (min-width: 768px){
        .authFormBtn {
            margin: 0 auto;
            background-color: #FF6B08;
            color: #ffffff;
            width: 320px;
            height: 60px;
        }
    }
    
`;
export default AuthFormStyled;