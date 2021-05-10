import { lazy } from 'react';
import HomeIcon from '../assets/icons/HomeIcon';
import TrangIcon from '../assets/icons/TrangIcon';

const mainRoutes = [
    {
        path: '/',
        name: 'Вхід',
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
        name: 'Регістрація',
        exact: true,
        component: lazy(() =>
            import(
                '../pages/signup/RegisterPage' /* webpackChunkName: "SignUpPage"*/
            ),
        ),
        isPrivate: false,
        restricted: true,
    },
    /*{
    path: '/signup/rules',
    name: 'Регістрація',
    exact: true,
    component: lazy(() =>
      import(
        '../pages/signup/RegisterPage' /* webpackChunkName: "SignUpPage"*/
    /* ),
    ),
    isPrivate: false,
    restricted: true,
  },*/
    {
        path: '/library',
        name: 'бібліотека',
        exact: true,
        icon: HomeIcon(),
        component: lazy(() =>
            import(
                '../pages/library/LibraryPage' /* webpackChunkName: "LibraryPage"*/
            ),
        ),
        isPrivate: true,
        restricted: false,
    },
    {
        path: '/training',
        name: 'тренування',
        exact: false,
        icon: TrangIcon(),
        component: lazy(() =>
            import(
                '../pages/training/TrainingPage' /* webpackChunkName: "TrainingPage"*/
            ),
        ),
        isPrivate: true,
        restricted: false,
    },
];

export default mainRoutes;
