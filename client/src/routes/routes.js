import { lazy } from 'react';
import HomeIcon from '../assets/icons/HomeIcon';
import TrangIcon from '../assets/icons/TrangIcon';

const mainRoutes = [
  {
    path: '/training',
    name: 'тренировка',
    exact: true,
    icon: TrangIcon(),
    component: lazy(() =>
      import(
        '../pages/training/TrainingPage' /* webpackChunkName: "TrainingPage"*/
      ),
    ),
    isPrivate: true,
    restricted: true,
  },
  {
    path: '/library',
    name: 'библиотека',
    exact: true,
    icon: HomeIcon(),
    component: lazy(() =>
      import(
        '../pages/library/LibraryPage' /* webpackChunkName: "LibraryPage"*/
      ),
    ),
    isPrivate: true,
    restricted: true,
  },
  {
    path: '/',
    name: 'Вход',
    exact: true,
    component: lazy(() =>
      import('../pages/signin/LoginPage' /* webpackChunkName: "SignInPage"*/),
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
