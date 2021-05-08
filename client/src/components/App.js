/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Suspense } from 'react';
import AppBar from './appBar/AppBar';
import { Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spin from './loader/Spin';
import mainRoutes from '../routes/routes';
import { useDispatch } from 'react-redux';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import { getUsersBooksOperetion } from '../redux/operations/bookOperation';
import loadingSelectors from '../redux/selectors/loadingSelector';
import Preloader from './loader/preloader/Preloader';
import trainingSelector from '../redux/selectors/trainingSelector';
import authOperations from '../redux/operations/authOperation';
import trainingOperation from '../redux/operations/trainingOperation';

const App = () => {
    const [preloader, setPreloader] = useState(false);
    const [initialModal, setInitialModal] = useState(false);
    const dispatch = useDispatch();
    const isLoading = useSelector(loadingSelectors.getLoading);
    const isAuth = useSelector(state => state.auth.token);
    const trainingId = useSelector(trainingSelector.getTrainingId);
    const training = useSelector(state => state.auth.user.training);
    const urlParams = new URLSearchParams(window.location.search);
    const googleToken = {
        accessToken: urlParams.get('accessToken'),
    };
    console.log(trainingId, 'ID');

    useEffect(() => {
        training !== null && trainingId === '' && console.log('hello!');
    }, [training, trainingId]);

    useEffect(() => {
        setPreloader(false);

        // setTimeout(() => {
        //     setPreloader(false);
        // }, 3000);
    }, []);

    useEffect(() => {
        googleToken?.accessToken &&
            dispatch(authOperations.logInWithGoogleOperation(googleToken));
    }, []);

    const initialAction = async () => {
        try {
            await dispatch(getUsersBooksOperetion());
        } catch (err) {
            return;
        }
    };

    useEffect(() => {
        isAuth && initialAction();
    }, []);

    return (
        <>
            {preloader ? (
                <Preloader />
            ) : (
                <>
                    {isLoading && <Spin />}
                    <AppBar />
                    <Suspense fallback={''}>
                        <Switch>
                            {mainRoutes.map(route =>
                                route.isPrivate ? (
                                    <PrivateRoutes
                                        {...route}
                                        key={route.path}
                                    />
                                ) : (
                                    <PublicRoutes {...route} key={route.path} />
                                ),
                            )}
                            <Redirect to="/" />
                        </Switch>
                    </Suspense>
                </>
            )}
        </>
    );
};

export default App;
