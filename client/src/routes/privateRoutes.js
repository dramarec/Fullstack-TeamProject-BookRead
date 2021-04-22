import { lazy } from 'react';

const privateRoutes = [
    {
        path: '/training',
        name: 'тренировка',
        exact: true,
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
        component: lazy(() =>
            import(
                '../pages/library/LibraryPage' /* webpackChunkName: "LibraryPage"*/
            ),
        ),
        isPrivate: true,
        restricted: true,
    },

];
export default privateRoutes;