import { lazy } from 'react';

const publicRoutes = [
    {
        path: '/',
        name: 'Вход',
        exact: true,
        component: lazy(() =>
            import(
                '../pages/signin/LoginPage' /* webpackChunkName: "SignInPage"*/
            ),
        ),
        isPrivate: false,
        restricted: true,
    },
    {
        path: '/signup',
        name: 'Регистрация',
        exact: true,
        component: lazy(() =>
            import(
                '../pages/signup/RegisterPage' /* webpackChunkName: "SignUpPage"*/
            ),
        ),
        isPrivate: false,
        restricted: true,
    },

];
export default publicRoutes;