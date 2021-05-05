/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useEffect } from 'react';
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
// import trainingSelector from '../redux/selectors/trainingSelector';
import authOperations from '../redux/operations/authOperation';
// import trainingOperation from '../redux/operations/trainingOperation';

const App = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(loadingSelectors.getLoading);
    const isAuth = useSelector(state => state.auth.token);
    // const training = useSelector(trainingSelector.getTraining);
    // const training = useSelector(state => state.auth.user.training);

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
        } catch (err) {
            return;
        }
    };

    useEffect(() => {
        isAuth && initialAction();
    }, []);

    return (
        <>
            {isLoading && <Spin />}
            <AppBar />

            <Suspense fallback={<Spin />}>
                <Switch>
                    {mainRoutes.map(route =>
                        route.isPrivate ? (
                            <PrivateRoutes {...route} key={route.path} />
                        ) : (
                            <PublicRoutes {...route} key={route.path} />
                        ),
                    )}
                    <Redirect to="/" />
                </Switch>
            </Suspense>
        </>
    );
};

export default App;
