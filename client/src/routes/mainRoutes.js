import { lazy } from 'react';

const mainRoutes = [
    {
        path: '/',
        name: 'Home',
        exact: true,
        component: lazy(() =>
            import('../pages/home/HomePage' /* webpackChunkName: "HomePage"*/),
        ),
        isPrivate: false,
        restricted: false,
    },
    {
        path: '/signin',
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
export default mainRoutes;