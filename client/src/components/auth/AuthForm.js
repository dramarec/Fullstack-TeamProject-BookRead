import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useLocation, Link, useRouteMatch } from 'react-router-dom';
import AuthFormStyled from './AuthFormStyled';
import Two from './icons/two';
import GoogleAuthBtn from './GoogleAuthBtn';
import Modal from '../modal/Modal';
import { useState } from 'react';
import Responsive from 'react-responsive';

const AuthForm = ({ handleSubmit, errorMessagesSchema }) => {
    const location = useLocation();
    //const match = useRouteMatch();
    const [isOpenModal, setOpenModal] = useState(false);

    const onModal = () => {
        setOpenModal(true);
    };
    console.log(isOpenModal);
    const initialState =
        location.pathname === '/signup'
            ? {
                  username: '',
                  email: '',
                  password: '',
                  passwordConfirmation: '',
              }
            : { email: '', password: '' };
    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    const Tablet = props => <Responsive {...props} minWidth={768} />;
    return (
        <AuthFormStyled path={location.pathname === '/signup'}>
            <div className="auth-container">
                <div className="container bg-ph">
                    <Formik
                        initialValues={{ ...initialState }}
                        validationSchema={errorMessagesSchema}
                        onSubmit={values => {
                            handleSubmit(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            /* location.pathname !== '/signup/rules' &&*/ <Form className="authForm">
                                <GoogleAuthBtn />

                                {location.pathname === '/signup' && (
                                    <label className="authFormFild">
                                        <span className="authFormText">
                                            Ім'я{' '}
                                            <sup className="authFormStar">
                                                {' '}
                                                *
                                            </sup>
                                        </span>
                                        <div className="wrapper">
                                            <Field
                                                className={`authFormInput ${
                                                    touched.username &&
                                                    errors.username &&
                                                    'authInputError'
                                                }`}
                                                type="text"
                                                name="username"
                                                placeholder=" "
                                            />

                                            <span className="authError">
                                                <ErrorMessage name="username" />
                                            </span>
                                        </div>
                                    </label>
                                )}
                                <label className="authFormFild">
                                    <span className="authFormText">
                                        Електронна адреса{' '}
                                        <sup className="authFormStar">*</sup>
                                    </span>
                                    <div className="wrapper">
                                        <Field
                                            className={`authFormInput ${
                                                touched.email &&
                                                errors.email &&
                                                'authInputError'
                                            }`}
                                            type="text"
                                            name="email"
                                            placeholder="your@email.com"
                                        />
                                        <span className="authError">
                                            <ErrorMessage name="email" />
                                        </span>
                                    </div>
                                </label>
                                <label className="authFormFild">
                                    <span className="authFormText">
                                        Пароль{' '}
                                        <sup className="authFormStar">*</sup>
                                    </span>
                                    <div className="wrapper">
                                        <Field
                                            className={`authFormInput ${
                                                touched.password &&
                                                errors.password &&
                                                'authInputError'
                                            }`}
                                            type="password"
                                            name="password"
                                            placeholder="Пароль"
                                        />
                                        <span className="authError">
                                            <ErrorMessage name="password" />
                                        </span>
                                    </div>
                                </label>
                                {location.pathname === '/signup' && (
                                    <label className="authFormFild">
                                        <span className="authFormText">
                                            Підтвердіть пароль{' '}
                                            <sup className="authFormStar">
                                                *
                                            </sup>
                                        </span>
                                        <div className="wrapper">
                                            <Field
                                                className={`authFormInput ${
                                                    touched.password &&
                                                    errors.password &&
                                                    'authInputError'
                                                }`}
                                                type="password"
                                                name="passwordConfirmation"
                                                placeholder="Пароль"
                                            />
                                            <span className="authError">
                                                <ErrorMessage name="passwordConfirmation" />
                                            </span>
                                        </div>
                                    </label>
                                )}
                                <button
                                    className="mainButton authFormBtn"
                                    type="submit"
                                >
                                    {location.pathname === '/signup'
                                        ? 'Зареєструватися'
                                        : 'Увійти'}
                                </button>
                                {location.pathname === '/signup' ? (
                                    <button
                                        className="mainButton authFormBtnSec"
                                        type="button"
                                    >
                                        <Link
                                            to="/"
                                            className="buttonSignUpMain"
                                        >
                                            <p className="buttonSignUpMain__text">
                                                Вже з нами?{' '}
                                                <span className="buttonSignUpMain__link">
                                                    {' '}
                                                    Увійти{' '}
                                                </span>{' '}
                                            </p>
                                        </Link>
                                    </button>
                                ) : (
                                    <button
                                        className="mainButton authFormBtnSec"
                                        type="button"
                                        onClick={onModal}
                                    >
                                        <a
                                            to="/signup"
                                            className="buttonSignUpMain"
                                        >
                                            <span className="buttonSignUpMain__link">
                                                Реєстрація
                                            </span>
                                        </a>
                                    </button>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="div-for-fl container">
                    {location.pathname === '/' && (
                        <div className="div-cont">
                            <Two />
                            <p className="teza">
                                Книги — это корабли мысли, странствующие по
                                волнам времени и бережно несущие свой
                                драгоценный груз от поколения к поколению.
                            </p>
                            <p className="becon line">Бэкон Ф.</p>
                        </div>
                    )}
                    {isOpenModal && window.innerWidth < 767 && (
                        <Modal className="authModal">
                            <div className="signupDiv">
                                <h1 className="mainTitleSignUp">
                                    Books Reading
                                </h1>
                                <h2 className="titleSignUp">Допоможе вам</h2>
                                <ul>
                                    <li className="authFormText">
                                        <sup className="authFormSym">{'>'}</sup>
                                        <p className="instraction">
                                            Швидше сформулювати свою ціль і
                                            розпочати читати
                                        </p>
                                    </li>
                                    <li className="authFormText">
                                        <sup className="authFormSym">{'>'}</sup>
                                        <p className="instraction">
                                            Пропорційно розподілити навантаження
                                            на кожний день
                                        </p>
                                    </li>
                                    <li className="authFormText">
                                        <sup className="authFormSym">{'>'}</sup>
                                        <p className="instraction">
                                            Відстежувати особистий успіх
                                        </p>
                                    </li>
                                </ul>
                                <h2 className="titleSignUp">
                                    Також ви зможете
                                </h2>
                                <ul>
                                    <li className="authFormText ">
                                        <sup className="authFormSym">{'>'}</sup>
                                        <p className="instraction">
                                            Формувати особисту думку незалежну
                                            від інших
                                        </p>
                                    </li>
                                    <li className="authFormText">
                                        <sup className="authFormSym">{'>'}</sup>
                                        <p className="instraction">
                                            Підвищити свої професійні якості
                                            опираючись на нові знання
                                        </p>
                                    </li>
                                    <li className="authFormText last">
                                        <sup className="authFormSym">{'>'}</sup>
                                        <p className="instraction">
                                            Стати цікавим співрозмовником
                                        </p>
                                    </li>
                                </ul>
                                <div className="sign">
                                    <button className="buttonSign in">
                                        <Link to="/">Увійти</Link>
                                    </button>
                                    <button className="buttonSign up">
                                        <Link to="/signup">Реєстрація</Link>
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    )}
                    {window.innerWidth > 767 &&
                        location.pathname === '/signup' && (
                            <div className="signupDiv">
                                <h1 className="mainTitleSignUp">
                                    Books Reading
                                </h1>
                                <h2 className="titleSignUp">Допоможе вам</h2>
                                <ul>
                                    <li className="authFormText">
                                        <sup className="authFormSym">{'>'}</sup>
                                        <p className="instraction">
                                            Швидше сформулювати свою ціль і
                                            розпочати читати
                                        </p>
                                    </li>
                                    <li className="authFormText">
                                        <sup className="authFormSym">{'>'}</sup>
                                        <p className="instraction">
                                            Пропорційно розподілити навантаження
                                            на кожний день
                                        </p>
                                    </li>
                                    <li className="authFormText">
                                        <sup className="authFormSym">{'>'}</sup>
                                        <p className="instraction">
                                            Відстежувати особистий успіх
                                        </p>
                                    </li>
                                </ul>
                                <h2 className="titleSignUp">
                                    Також ви зможете
                                </h2>
                                <ul>
                                    <li className="authFormText ">
                                        <sup className="authFormSym">{'>'}</sup>
                                        <p className="instraction">
                                            Формувати особисту думку незалежну
                                            від інших
                                        </p>
                                    </li>
                                    <li className="authFormText">
                                        <sup className="authFormSym">{'>'}</sup>
                                        <p className="instraction">
                                            Підвищити свої професійні якості
                                            опираючись на нові знання
                                        </p>
                                    </li>
                                    <li className="authFormText last">
                                        <sup className="authFormSym">{'>'}</sup>
                                        <p className="instraction">
                                            Стати цікавим співрозмовником
                                        </p>
                                    </li>
                                </ul>
                                <div className="sign">
                                    <button className="buttonSign in">
                                        <Link to="/">Увійти</Link>
                                    </button>
                                    <button className="buttonSign up">
                                        <Link to="/signup">Реєстрація</Link>
                                    </button>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </AuthFormStyled>
    );
};

export default AuthForm;
