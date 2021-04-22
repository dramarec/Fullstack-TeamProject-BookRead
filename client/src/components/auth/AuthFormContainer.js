import React from 'react';
import { useLocation /* useHistory */ } from 'react-router-dom';
import * as Yup from 'yup';
import AuthForm from './AuthForm';

const AuthFormContainer = () => {
  const location = useLocation();
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const errorMessagesSchemaSignUp = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Минимальное количество символов 2 ')
      .max(20, 'Максимально допустимое количество символов 20')
      .required('Введите имя'),
    email: Yup.string()
      .required('Введите email')
      .matches(regex, 'Введен неверный email'),

    password: Yup.string()
      .min(8, 'Минимальное количество символов 8')
      .max(20, 'Максимально допустимое количество символов 20')
      .required('Введите пароль'),
  });

  const errorMessagesSchemaSignIn = Yup.object().shape({
    email: Yup.string()
      .required('Введите email')
      .matches(regex, 'Введен неверный email'),
    password: Yup.string()
      .min(8, 'Минимальное количество символов 8')
      .max(20, 'Максимально допустимое количество символов 20')
      .required('Введите пароль'),
  });

  const errorMessagesSchema =
    location.pathname === '/signup'
      ? errorMessagesSchemaSignUp
      : errorMessagesSchemaSignIn;

  const handleSubmit = values => {
    // if (location.pathname === '/signup' && !age) {
    // history.push('/');

    return;
    // }
    // if (location.pathname === '/signup' && age) {
    // signUp(values);
    // } else signIn(values);
  };

  return (
    <AuthForm
      handleSubmit={handleSubmit}
      errorMessagesSchema={errorMessagesSchema}
    />
  );
};
export default AuthFormContainer;
