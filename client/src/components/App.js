import React, { Suspense } from 'react';
// import Modal from './modal/Modal';
// import Button from './testButton.js/TestButton';
// import Chart from './chart/Chart';
// import LibraryPage from '../pages/library/LibraryPage';
import AppBar from './appBar/AppBar';
import { Switch, Redirect } from 'react-router-dom';
import Spin from './loader/Spin';
import mainRoutes from '../routes/routes';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';

const App = () => {
  return (
    <>
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
