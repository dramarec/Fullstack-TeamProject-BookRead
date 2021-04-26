import styled from 'styled-components';
import imgMob from './photo/mob.jpg';
import imgTab from './photo/tab.jpg';
import imgDec from './photo/desctop.jpg';

const AuthFormStyled = styled.div`
 
    background: #091E3FCC;
    background:  url(${imgMob}) ;
    background-repeat: no-repeat;
    background-size: cover;
    max-height: 656px;
.authForm {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
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
    margin-bottom: 25px;
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
    
.div-for-fl{
    /* width: 316px; */
    width: 100%;
    background: #ffffff;
    margin: 0 auto;
    /* position: relative; */
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
    padding-top: 5px;
    }
.becon{
    color: #898F9F;
    font-weight: 500;
font-size: 14px;
line-height: 2.3;
text-align: center;
margin-top: 18px;
 padding-bottom: 7px;
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
         background: #091E3FCC;
    background:  url(${imgTab}) ;
    width: 100%;
    max-height: 796px;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-size: cover;
   
    .authFormText{
        font-family:  Montserrat-Medium;
        font-weight: 500;
        font-size: 14px;
        line-height: 2.3;
        color: #898F9F;
    }
    .authForm {
        display: flex;
        flex-direction: column;
        width: 400px;
       
        background-color: white;
        margin: 0 auto;
        margin-top: 70px;
        margin-bottom: 70px
    }
      .div-for-fl{
    width: 100%;
   
    background: #ffffff;
    margin: 0 auto;
   position: relative;
   
    }
    .svg{
        margin: 0 auto;
        text-align: center;
        height:65px;
        display: flex;
    justify-content: center;
    padding-top: 62px;
   
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
padding-bottom: 62px;
}
    }

    @media (min-width: 1280px){
        /* width: 565px; */
        max-height: 790px;
        background:  url(${imgDec}) ;
         background-repeat: no-repeat;
        position: relative;
        .authForm {
        display: flex;
        flex-direction: column;
        width: 400px;
        background-color: white;
        margin:0;
        margin-top: 185px;
        margin-left: 44px;
        margin-bottom: 185px;
        /* margin: 0 auto; */
        }
        .div-cont{
            padding-top: 266px;
        }
      
  .div-for-fl{
    width: 715px;
    height: 790px;
    background: #ffffff;
    margin: 0 auto; 
   position: absolute;
    left: 565px;
    top: 0px;
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
.authFormText{
        color: #898F9F;
    }
    }


/* styles for register information */
.authFormSym{
        color: #FF6B08;
     font-size: 10px;
     margin-right: 11px;
    }
.mainTitleSignUp{
    text-align: center;
    font-family: 'AbrilFatface-Regular';
    font-weight: normal;
font-size: 34px;
/* line-height: 1.4px;  */
padding-top: 30px;
margin-bottom: 20px;
}
.titleSignUp{
    font-family: 'Montserrat-Medium';
    font-weight: 500;
font-size: 20px;
margin-top: 20px

}
.authFormText{
    font-family: 'Montserrat-Medium';
    font-weight: 500;
    font-size: 14px;
    color: #898F9F;
    margin-top: 14px;
}
.buttonSignUp{
    width: 127px;
    height: 40px;
    border: 1px solid #242A37;
    color: #242A37;
    margin-top: 31px;
    margin-bottom: 58px;
}
.buttonSignUpMain{
     width: 127px;
    height: 40px;
    color: #FF6B08;
    margin-top: 5px;
    border: none;
}

.buttonSignUp:last-child{
margin-left: 16px;
}
.buttonSignUp:hover {
background: orange;
color: white;
border: none;
}
.buttonSignUp:focus{
    background: orange;
color: white;
border: none;
}
@media (min-width: 768px) and (max-width:1279px){
    .buttonSignUp{
        /* opacity: 0; */
        display: none
    }
    .last{
        padding-bottom: 93px;
    }
    .mainTitleSignUp{
        padding-top: 60px;
        padding-bottom: 20px;
    }

}
@media (min-width: 1280px){
    .buttonSignUp{
        /* opacity: 0; */
        display: none
    }
    .last{
        padding-bottom: 93px;
    }
    .mainTitleSignUp{
        padding-top: 133px;
        text-align: center;
        padding-bottom: 32px;
    }
    .signupDiv{
        padding-left: 90px;
    }
     /* .authForm {
    
    display: flex;
    flex-direction: column;
    width: 400px;
    background-color: white;
    margin: 0;
    margin-left: 44px;
     margin-bottom: 92px;
    margin-top: 92px;
} */

}


`;
export default AuthFormStyled;