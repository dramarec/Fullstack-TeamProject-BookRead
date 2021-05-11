/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Suspense } from 'react';
import AppBar from './appBar/AppBar';
import { Switch, Redirect, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spin from './loader/Spin';
import mainRoutes from '../routes/routes';
import { useDispatch } from 'react-redux';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import { getUsersBooksOperetion } from '../redux/operations/bookOperation';
import loadingSelectors from '../redux/selectors/loadingSelector';
import Preloader from './loader/preloader/Preloader';
import authOperations from '../redux/operations/authOperation';
import trainingOperation from '../redux/operations/trainingOperation';
import usePersistedTheme from './theme/persistedTheme';
import { ThemeProvider } from 'styled-components';
import light from '../themes/light';
import dark from '../themes/dark';
import GlobalStyle from '../themes/GlobalStyle';

const App = () => {
    const [preloader, setPreloader] = useState(false);
    // const [initialModal, setInitialModal] = useState(false);
    const dispatch = useDispatch();
    const isLoading = useSelector(loadingSelectors.getLoading);
    const isAuth = useSelector(state => state.auth.token);
    const training = useSelector(state => state.auth.user.training);
    const urlParams = new URLSearchParams(window.location.search);
    const googleToken = {
        accessToken: urlParams.get('accessToken'),
    };

    useEffect(() => {
        googleToken?.accessToken &&
            dispatch(authOperations.logInWithGoogleOperation(googleToken));
    }, []);

    const initialAction = async () => {
        try {
            await dispatch(getUsersBooksOperetion());
            training !== null &&
                (await dispatch(trainingOperation.getTrainingOperation()));
        } catch (err) {
            err.message === 'training is over' &&
                console.log('training is over!!');
            dispatch(getUsersBooksOperetion());
            /*
            Тут вызывать переключатель
            */
        }
    };

    useEffect(() => {
        isAuth && initialAction();
    }, [training]);

    useEffect(() => {
        setPreloader(false);

        // setTimeout(() => {
        //     setPreloader(false);
        // }, 3000);
    }, []);
    /*const [theme, setTheme] = usePersistedTheme('theme', light);
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };*/

    return (
        <>
            {preloader ? (
                <Preloader />
            ) : (
                <>
                    {isLoading && <Spin />}
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        <AppBar />
                        {/*isAuth && (
                            <div className="container">
                                <label id="switch" className="switch">
                                    <input
                                        onChange={toggleTheme}
                                        type="checkbox"
                                        id="slider"
                                    />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        )*/}
                        <Suspense fallback={''}>
                            <Switch>
                                {mainRoutes.map(route =>
                                    route.isPrivate ? (
                                        <PrivateRoutes
                                            {...route}
                                            key={route.path}
                                        />
                                    ) : (
                                        <PublicRoutes
                                            {...route}
                                            key={route.path}
                                        />
                                    ),
                                )}
                                <Redirect to="/" />
                            </Switch>
                        </Suspense>
                    </ThemeProvider>
                </>
            )}
        </>
    );
};

export default App;
