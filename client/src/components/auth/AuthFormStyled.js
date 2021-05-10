import styled from 'styled-components';
import imgMob from './photo/mob.jpg';
import bgMob from './photo/mob-bg.png';
import imgTab from './photo/tab.jpg';
import bgTab from './photo/tab-bg.png';
//import imgDec from './photo/desctop.jpg';
import bgDec from './photo/dec-bg.png';
import picTest from './photo/picTest.jpg';

const AuthFormStyled = styled.div`
    .signupDiv {
        @media (max-width: 767px)  {
            max-width: 100%;
            min-width: 320px;
            height: 700px;
            padding: 0 20px;
          }
            @media (min-width: 768px) and (max-width: 1279px) {
                padding: 60px 0 93px 0;
            }
        }

        .auth-container {
            @media (max-width: 1279px) {
                display: block;
            }
            @media (min-width: 1280px) {
                display: flex;
            }
        }
        .div-for-fl {
            flex: 3 1 0;
        }
        .bg-ph {
            flex: 2 1 0;
            @media (min-width: 1280px) {
                padding-top: ${props => (props.path ? '92px' : '185px')};
                //padding-top: 185px;
            }
        }
        .buttonSignUpMain__text {
            color: var(--#898f9f);
        }
        .buttonSignUpMain__link {
            text-decoration: underline;
            color: var(--accent-color);
        }
        .signupDiv {
            @media and (min-width: 768px) and (max-width: 1279px) {
                padding: 0 110px;
            }
        }
        .authError {
            font-family: 'Montserrat-Regular';
            color: #e63946;
            font-size: 13px;
        }

        .wrapper {
            display: grid;
            height: 30px;
        }
        .bg-ph {
            background: url(${bgMob}), url(${imgMob});
            background-repeat: no-repeat;
            background-size: cover;
            //min-height: 444px;
            max-height: 656px;
            width: 100%;
        }
        .authForm {
            display: flex;
            flex-direction: column;
        }
        .btn-google {
            font-weight: bold;
            font-size: 16px;

            text-align: center;
            color: #707375;
            background: #f5f7fa;
            width: 150px;
            height: 50px;
            border: none;
            margin: 0 auto;
            margin-top: 30px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
                sans-serif;
        }
        .authFormText {
            display: flex;
            align-items: baseline;
            font-family: Montserrat-Medium;
            font-size: 14px;
            line-height: 2;
            color: #ffffff;
        }
        .authFormStar {
            color: #ff6b08;
            font-size: 14px;
            margin-left: 4px;
        }

        .authFormBtn {
            margin: 0 auto;
            background-color: #ff6b08;
            color: #ffffff;
            width: 270px;
            height: 60px;
            margin-top: 30px;
            border: none;
            font-family: 'Montserrat-SemiBold';
            font-size: 16px;
        }
        .authFormBtnSec {
            border: none;
            background: 0;
            color: #ff6b08;
            font-size: 13px;
            //width: 76px;
            height: 38px;
            margin: 0 auto;
            margin-bottom: 25px;
        }

        .authFormFild {
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            margin-bottom: 12px;
            font-size: 14px;
            line-height: 1.21;
            letter-spacing: 0.04em;
            margin-bottom: 25px;
        }
        .authFormInput {
            font-family: 'Montserrat-Regular';
            margin-bottom: 5px;
            padding: 5px 0;
            padding-left: 13px;
            width: 100%;
            font-size: 14px;
            line-height: 1.21;
            letter-spacing: 0.04em;
            border: none;
            background-color: #f5f7fa;
            box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
            outline: none;
            width: 270px;
            height: 42px;
        }

        .div-for-fl {
            width: fit-content;
            background: #ffffff;
            margin: 0 auto;
        }

        .teza {
            font-size: 13px;
            margin: 0 auto;
            text-align: center;
            box-sizing: border-box;
            //width: 229px;
            font-family: 'Montserrat-Medium';
        }
        .svg {
            margin: 0 auto;
            text-align: center;
            height: 45px;
            display: flex;
            justify-content: center;
            padding-top: 5px;
        }
        .becon {
            color: #898f9f;
            font-weight: 500;
            font-size: 14px;
            line-height: 2.3;
            text-align: center;
            margin-top: 18px;
            padding-bottom: 7px;
        }

        .line::before {
            display: block;
            content: '';
            height: 1px;
            background-color: rgba(36, 42, 55, 0.5);
            margin: 0 auto;
            width: 100px;
            transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

            text-align: center;
        }
        .bg {
            display: flex;
        }

        @media (min-width: 768px) and (max-width: 1279px) {
            .bg-ph {
                background: #091e3fcc;
                background: url(${bgTab}), url(${imgTab});
                width: 100%;
                max-height: 796px;

                box-sizing: border-box;
                background-repeat: no-repeat;
                background-size: cover;
            }

            .authFormText {
                font-family: 'Montserrat-Medium';
                align-items: center;
                font-weight: 500;
                font-size: 14px;
                line-height: 2;
                color: #898f9f;
            }
            .authForm {
                display: flex;
                flex-direction: column;
                width: 400px;
                max-height: 610px;
                background-color: white;
                margin: 0 auto;
                margin-top: 60px;
                margin-bottom: 60px;
            }
            .div-for-fl {
                width: fit-content;
                background: #ffffff;
                margin: 0 auto;
            }
            .svg {
                margin: 0 auto;
                text-align: center;
                height: 65px;
                display: flex;
                justify-content: center;
            }
            /*.div-cont{
          padding-top: 62px;
    }*/
            .teza {
                font-size: 24px;
                margin: 0 auto;
                text-align: center;
                box-sizing: border-box;
                width: 526px;
                line-height: 1.58;
                font-family: 'Montserrat-Medium';
            }

            .line::before {
                display: block;
                content: '';
                height: 1px;
                background-color: rgba(36, 42, 55, 0.5);
                margin: 0 auto;
                width: 150px;
                transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

                text-align: center;
            }
            .becon {
                color: #898f9f;
                font-weight: 500;
                font-size: 20px;
                font-family: 'Montserrat-Medium';
                line-height: 1.9;
                text-align: center;
                margin-top: 28px;
                padding-bottom: 62px;
            }
        }

        @media (min-width: 1280px) {
            .container.bg-ph {
                background-size: cover;
            }
            .bg-ph {
                max-height: 100%;
                margin-bottom: -200px;
                //max-height: 790px;
                //height: 790px;
                background: url(${bgDec}), url(${picTest});
                background-repeat: no-repeat;
                width: 100%;
            }

            .authForm {
                display: flex;
                flex-direction: column;
                margin: 0 auto;
                width: 400px;
                background-color: white;
                max-height: 610px;
                max-height: 610px;
            }
            .div-cont {
                padding-top: 206px;
            }

            .div-for-fl {
                width: 715px;
                height: 790px;
                width: 100%;
                margin: 0 auto;
            }
            .svg {
                margin: 0 auto;
                text-align: center;
                height: 65px;
                display: flex;
                justify-content: center;
            }
            .teza {
                font-size: 24px;
                margin: 0 auto;
                text-align: center;
                width: 397px;
                line-height: 1.58;
                font-family: 'Montserrat-Medium';
            }
            .line::before {
                display: block;
                content: '';
                height: 1px;
                background-color: rgba(36, 42, 55, 0.5);
                margin: 0 auto;
                width: 150px;
                transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
                text-align: center;
            }
            .becon {
                color: #898f9f;
                font-weight: 500;
                font-size: 20px;
                line-height: 2.3;
                text-align: center;
                margin-top: 28px;
                font-family: 'Montserrat-Medium';
            }
            .authFormText {
                align-items: center;
                color: #898f9f;
            }
        }

        .authFormSym {
            color: #ff6b08;
            font-size: 17px;
            margin-right: 11px;
        }
        .mainTitleSignUp {
            text-align: center;
            font-family: 'AbrilFatface-Regular';
            font-weight: normal;
            font-size: 34px;
            line-height: 1.1;
            padding-top: 30px;
            margin-bottom: 20px;
        }
        .titleSignUp {
            font-family: 'Montserrat-Medium';
            font-weight: 500;
            font-size: 20px;
            margin-top: 20px;
            line-height: 1.9;
            margin-bottom: 4px;
        }
        .instraction {
            font-family: 'Montserrat-Medium';
            font-weight: 500;
            font-size: 14px;
            color: #898f9f;
            line-height: 1.21;
            @media (min-width: 768px) {
                line-height: 2;
            }
        }
        .sign {
            width: fit-content;
            margin: 0 auto;
        }
        .buttonSign {
            width: 127px;
            height: 40px;
            border: none;
            margin-top: 31px;
            margin-bottom: 58px;
        }
        .buttonSign.in {
            border: 1px solid var(--main-text);
            background-color: transparent;
            margin-right: 16px;
        }
        .buttonSign.up {
            background-color: var(--accent-color);
        }
        .buttonSign a {
            text-decoration: none;
            font-size: 14px;
            font-family: 'Montserrat-Regular';
            line-height: 2.71;
        }
        .buttonSign.up a {
            color: var(--light-text);
        }
        .buttonSign.in a {
            color: var(--main-text);
        }

        .buttonSignUpMain {
            width: 127px;
            height: 40px;
            color: #ff6b08;
            margin-top: 5px;
            border: none;
            text-decoration: none;
            font-family: 'Montserrat-Medium';
        }

        .buttonSignUpMain__text {
            color: var(--secondary-text);
        }
        .buttonSignUp:last-child {
            margin-left: 16px;
        }
        .buttonSignUp:hover {
            background: orange;
            color: white;
            border: none;
        }
        .buttonSignUp:focus {
            background: orange;
            color: white;
            border: none;
        }
        @media (min-width: 768px) and (max-width: 1279px) {
            .sign {
                display: none;
            }
            .mainTitleSignUp {
                padding-top: 0;
                padding-bottom: 20px;
            }
        }
        @media (min-width: 1280px) {
            .buttonSign {
                display: none;
            }
            .last {
                padding-bottom: 93px;
            }
            .mainTitleSignUp {
                padding-top: 133px;
                text-align: center;
                padding-bottom: 32px;
                margin-right: 90px;
            }
            .signupDiv {
                padding-left: 90px;
            }
        }
    }
`;
export default AuthFormStyled;
