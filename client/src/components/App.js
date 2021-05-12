import React, { useState, useEffect, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import mainRoutes from '../routes/routes';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import AppBar from './appBar/AppBar';
import Spin from './loader/Spin';
import Modal from './modal/Modal';
import ErrTrainingModal from './endTrainingMdl/ErrTrainingModal';
import Preloader from './loader/preloader/Preloader';
import authOperations from '../redux/operations/authOperation';
import trainingOperation from '../redux/operations/trainingOperation';
import { getUsersBooksOperetion } from '../redux/operations/bookOperation';
import loadingSelectors from '../redux/selectors/loadingSelector';
import authSelectors from '../redux/selectors/authSelector';

const App = () => {
    const dispatch = useDispatch();

    const [preloader, setPreloader] = useState(false);
    const [initialModal, setInitialModal] = useState(false);

    const isLoading = useSelector(loadingSelectors.getLoading);
    const isAuth = useSelector(authSelectors.isAuthSelect);
    const training = useSelector(authSelectors.getUserTraining);

    const urlParams = new URLSearchParams(window.location.search);
    const googleToken = {
        accessToken: urlParams.get('accessToken'),
    };

    useEffect(() => {
        googleToken?.accessToken &&
            dispatch(authOperations.logInWithGoogleOperation(googleToken));
    }, []);

    const trainingAction = async () => {
        try {
            training !== null &&
                (await dispatch(trainingOperation.getTrainingOperation()));
        } catch (err) {
            err.message === 'training is over' &&
                dispatch(getUsersBooksOperetion());
            setInitialModal(true);
        }
    };
    useEffect(() => {
        isAuth && dispatch(getUsersBooksOperetion());
    }, []);

    useEffect(() => {
        isAuth && trainingAction();
    }, [training]);

    useEffect(() => {
        setPreloader(true);

        setTimeout(() => {
            setPreloader(false);
        }, 3000);
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
