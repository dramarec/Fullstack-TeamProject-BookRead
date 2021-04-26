import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useLocation, Link } from 'react-router-dom';
import AuthFormStyled from './AuthFormStyled';
import Two from './icons/two';
import GoogleAuthBtn from './GoogleAuthBtn';

const AuthForm = ({ handleSubmit, errorMessagesSchema }) => {
  let location = useLocation();
  const initialState =
    location.pathname === '/signup'
      ? { username: '', email: '', password: '' }
      : { email: '', password: '' };
  return (
    <AuthFormStyled>
      {/* signin */}
      <div className="container">
        <div className="bg-ph">
          <Formik
            initialValues={{ ...initialState }}
            validationSchema={errorMessagesSchema}
            onSubmit={values => {
              handleSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="authForm">
                {/* <button className="btn-google">Google</button> */}
                <GoogleAuthBtn />
                {location.pathname === '/signup' && (
                  <label className="authFormFild">
                    <span className="authFormText">
                      Им'я <sup className="authFormStar">*</sup>
                    </span>
                    <Field
                      className={`authFormInput ${
                        touched.username && errors.username && 'authInputError'
                      }`}
                      type="text"
                      name="username"
                      placeholder=" "
                    />

                    <span className="authError">
                      <ErrorMessage name="username" />
                    </span>
                  </label>
                )}
                <label className="authFormFild">
                  <span className="authFormText">
                    Електронна адреса <sup className="authFormStar">*</sup>
                  </span>
                  <Field
                    className={`authFormInput ${
                      touched.email && errors.email && 'authInputError'
                    }`}
                    type="text"
                    name="email"
                    placeholder="your@email.com"
                  />

                  <span className="authError">
                    <ErrorMessage name="email" />
                  </span>
                </label>
                <label className="authFormFild">
                  <span className="authFormText">
                    Пароль <sup className="authFormStar">*</sup>
                  </span>
                  <Field
                    className={`authFormInput ${
                      touched.password && errors.password && 'authInputError'
                    }`}
                    type="password"
                    name="password"
                    placeholder="Пароль"
                  />
                  <span className="authError">
                    <ErrorMessage name="password" />
                  </span>
                </label>
                {location.pathname === '/signup' && (
                  <label className="authFormFild">
                    <span className="authFormText">
                      Підтвердіть пароль <sup className="authFormStar">*</sup>
                    </span>
                    <Field
                      className={`authFormInput ${
                        touched.password && errors.password && 'authInputError'
                      }`}
                      type="password-true"
                      name="password-true"
                      placeholder="Пароль"
                    />

                    <span className="authError">
                      <ErrorMessage name="password" />
                    </span>
                  </label>
                )}
                <button className="mainButton authFormBtn" type="submit">
                  {location.pathname === '/signup' ? 'Реєстрація' : 'Увійти'}
                </button>
                <button className="mainButton authFormBtnSec" type="submit">
                  {location.pathname === '/signup' ? (
                    <Link to="/" className="buttonSignUpMain">
                      Увійти
                    </Link>
                  ) : (
                    <Link to="/signup" className="buttonSignUpMain">
                      Реєстрація
                    </Link>
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="div-for-fl">
          {location.pathname === '/' && (
            <div className="div-cont">
              <Two />
              <p className="teza">
                Книги — это корабли мысли,
                <br />
                странствующие по волнам <br />
                времени и бережно несущие <br />
                свой драгоценный груз от <br />
                поколения к поколению.
              </p>
              <p className="becon line">Бэкон Ф.</p>
            </div>
          )}
          {location.pathname === '/signup' && (
            <div className="signupDiv">
              <h1 className="mainTitleSignUp">Books Reading</h1>
              <h2 className="titleSignUp">Допоможе вам</h2>
              <ul>
                <li className="authFormText">
                  <sup className="authFormSym">{'>'}</sup>Швидше сформулювати
                  свою ціль і розпочати читати
                </li>
                <li className="authFormText">
                  <sup className="authFormSym">{'>'}</sup>Пропорційно
                  розподілити навантаження на кожний день
                </li>
                <li className="authFormText">
                  <sup className="authFormSym">{'>'}</sup>Відстежувати особистий
                  успіх
                </li>
              </ul>
              <h2 className="titleSignUp">Також ви зможете</h2>
              <ul>
                <li className="authFormText">
                  <sup className="authFormSym">{'>'}</sup>Формувати особисту
                  думку незалежну від інших
                </li>
                <li className="authFormText">
                  <sup className="authFormSym">{'>'}</sup>Підвищити свої
                  професійні якості опираючись на нові знання
                </li>
                <li className="authFormText last">
                  <sup className="authFormSym">{'>'}</sup>Стати цікавим
                  співрозмовником
                </li>
              </ul>

              <Link to="/" className="buttonSignUp">
                Увійти
              </Link>
              <Link to="/signup" className="buttonSignUp">
                Реєстрація
              </Link>
            </div>
          )}
        </div>
      </div>
    </AuthFormStyled>
  );
};

export default AuthForm;
