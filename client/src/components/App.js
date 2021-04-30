import React, { Suspense, useEffect } from 'react';
// import Modal from './modal/Modal';
// import Button from './testButton.js/TestButton';
// import Chart from './chart/Chart';
// import LibraryPage from '../pages/library/LibraryPage';
import AppBar from './appBar/AppBar';
import { Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spin from './loader/Spin';
import mainRoutes from '../routes/routes';
import { useDispatch } from 'react-redux';
// import { publicRoutes } from '../routes/publicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import { getUsersBooksOperetion } from '../redux/operations/bookOperation';
import loadingSelectors from '../redux/selectors/loadingSelector';
import trainingOperation from '../redux/operations/trainingOperation';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsersBooksOperetion());
        dispatch(trainingOperation.getTrainingOperation());
    }, []);

    const isLoading = useSelector(loadingSelectors.getLoading);

    return (
        <>
            {isLoading && <Spin />}
            <AppBar />
            <div>
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
            </div>
            {/* <div>
        <LibraryPage />
        <Button />
        <Modal>
          <h1>Hello</h1>
        </Modal>
      </div> */}
        </>
    );
};

export default App;
