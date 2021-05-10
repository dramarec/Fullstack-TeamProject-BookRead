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
import authOperations from '../redux/operations/authOperation';
import trainingOperation from '../redux/operations/trainingOperation';
import Modal from './modal/Modal';
import ErrTrainingModal from './endTrainingMdl/ErrTrainingModal';

const App = () => {
    const [preloader, setPreloader] = useState(false);
    const [initialModal, setInitialModal] = useState(false);
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
            setInitialModal(true);
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

    const closeModal = () => {
        setInitialModal(false);
    };

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
                    {initialModal && (
                        <Modal closeModal={closeModal}>
                            <ErrTrainingModal
                                oncloseModal={closeModal}
                                setInitialModal={setInitialModal}
                            />
                        </Modal>
                    )}
                </>
            )}
        </>
    );
};

export default App;
