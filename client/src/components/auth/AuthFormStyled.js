import styled from 'styled-components';
import imgMob from './photo/mob.jpg';
import imgTab from './photo/tab.jpg';
import imgDec from './photo/desctop.jpg';

const AuthFormStyled = styled.div`
 
    /* max-width: 382px;
    
    
    @media (min-width: 320px) {
       // max-width: 382px;
           background:  url(${imgMob}) ;
           background-repeat: no-repeat;
           background-size: cover;
    }
    /* @media (min-width: 768px) {
        max-width: 382px;
        
    } 
     @media (min-width: 768px) {
        //max-width: 382px;
        background:  url(${imgTab}) ;
        background-repeat: no-repeat;
        background-size: cover;
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
        @media (max-width: 768px) {
            text-align: center;
        }
        @media (min-width: 768px) and (max-width: 1279px) {
            margin-bottom: 60px;
        }
        @media (min-width: 768px) {
            background:  url(${imgTab}) #091E3FCC;
        }
        @media (min-width: 1279px) and (max-width: 1300px)  {
            background:  url(${imgDec}) #091E3FCC;
           
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
   
    /* width: 320px; */
   
    background: #091E3FCC;
    background:  url(${imgMob}) ;
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;
    @media (min-width: 768px){
         background: #091E3FCC;
    background:  url(${imgTab}) ;
    width: 768px;
    height: 560px;
    box-sizing: border-box;
    }
    @media (min-width: 1280px){
        width: 565px;
        height: 790px;
        background:  url(${imgDec}) ;
        .authForm {
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 420px;
        background-color: white;

        margin:0;
        margin-top: 185px;
        margin-left: 44px;
        /* margin: 0 auto; */
        }
    }
    .btn-google{
    font-weight: bold;
    font-size: 16px;
    line-height: 38px;
    text-align: center;
    color: #707375;
    background: #F5F7FA;
    width:150px;
    height:50px;
    border: none;
    margin: 0 auto;
    margin-top: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
        .authFormText{
        font-family:  Montserrat-Medium;
        font-weight: 600;
        font-size: 14px;
        line-height: 2.3;
        color: #ffffff;
    
    }
    @media (min-width: 768px) and (max-width: 1279px){
        .authFormText{
        font-family:  Montserrat-Medium;
        font-weight: 500;
        font-size: 14px;
        line-height: 2.3;
        color: #898F9F;
    }
    }
    .authFormStar{
        color: #FF6B08;
        font-size: 14px;
    }

    .authFormBtn {
        margin: 0 auto;
        background-color: #FF6B08;
        color: #ffffff;
        width: 270px;
        height: 60px;
        margin-top: 30px;
        border: none;
    }
    .authFormBtnSec{
        border: none;
    background: 0;
    color: #FF6B08;
    font-size: 13px;
    width: 76px;
    height: 38px;
    margin: 0 auto;
    margin-bottom: 11px;
    }
    .authForm {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }
    @media (min-width: 768px) and (max-width: 1279px){
        .authForm {
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 420px;
        background-color: white;
        margin: 0 auto;
        margin-top: 70px;
    }  
    }
    .authFormFild {
        position: relative;
        display: flex;
        flex-direction: column;
            margin: 0 auto;
        margin-bottom: 12px;
        font-size: 14px;
        line-height: 1.21;
        letter-spacing: 0.04em;
    }
    .authFormInput {
        padding: 5px 0;
        width: 100%;
        font-size: 16px;
        line-height: 1.21;
        letter-spacing: 0.04em;
        border: none;
        background-color: #F5F7FA;
        box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
        outline: none;
         width: 270px;
         height: 42px;
    
    }
    /* .div-for-fl{
        display: flex;
    }
    .teza{
        font-size: 24px;
    } */
.div-for-fl{
    /* width: 316px; */
    width: 100%;
    height: 186px;
    background: #ffffff;
    margin: 0 auto;
}

.teza{
        font-size: 13px;
            margin: 0 auto;
    text-align: center;
        
    }
    .svg{
        margin: 0 auto;
        text-align: center;
        height:45px;
        display: flex;
    justify-content: center;
    }
.becon{
    color: #898F9F;
    font-weight: 500;
font-size: 14px;
line-height: 2.3;
text-align: center;
margin-top: 18px;
}
.line::before {
    display: block;
    content: "";
    height: 1px;
    background-color: rgba(36, 42, 55, 0.5);
    margin: 0 auto;
    width: 100px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
}
.bg-ph{
    display: flex;
}
    @media (min-width: 768px) and (max-width: 1279px){
    .div-for-fl{
    width: 100%;
    height: 404px;
    background: #ffffff;
    margin: 0 auto;
    margin-top: 132px;
    }
    .svg{
        margin: 0 auto;
        text-align: center;
        height:65px;
        display: flex;
    justify-content: center;
    
    }
    .teza{
        font-size: 24px;
            margin: 0 auto;
    text-align: center;    
    }
    .line::before {
    display: block;
    content: "";
    height: 1px;
    background-color: rgba(36, 42, 55, 0.5);
    margin: 0 auto;
    width: 150px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
}
.becon{
    color: #898F9F;
    font-weight: 500;
font-size: 20px;
line-height: 2.3;
text-align: center;
margin-top: 28px;
}
}
@media (min-width: 1280px){
    .authForm {
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-top: 185px;
}
  .div-for-fl{
    width: 715px;
    height: 790px;
    background: #ffffff;
    margin: 0 auto;
    margin-top: 132px;
    position: absolute;
    right: 0;
    }
    .svg{
        margin: 0 auto;
        text-align: center;
        height:65px;
        display: flex;
    justify-content: center;
    
    }
    .teza{
        font-size: 24px;
            margin: 0 auto;
    text-align: center;    
    }
    .line::before {
    display: block;
    content: "";
    height: 1px;
    background-color: rgba(36, 42, 55, 0.5);
    margin: 0 auto;
    width: 150px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
}
.becon{
    color: #898F9F;
    font-weight: 500;
font-size: 20px;
line-height: 2.3;
text-align: center;
margin-top: 28px;
}
}
`;
export default AuthFormStyled;