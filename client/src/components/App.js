import React, { Suspense, useEffect } from 'react';
// import Modal from './modal/Modal';
// import Button from './testButton.js/TestButton';
// import Chart from './chart/Chart';
// import LibraryPage from '../pages/library/LibraryPage';
import AppBar from './appBar/AppBar';
import { Switch, Route } from 'react-router-dom';
import mainRoutes from '../routes/routes';
//import { getUsersBooks } from '../redux/operations/userLibraryOperation';
//import { useDispatch } from 'react-redux';

// import { publicRoutes } from '../routes/publicRoutes';

const App = () => {
 /*  const dispatch = useDispatch();
   useEffect(() => {
     dispatch(getUsersBooks())
   }, dispatch);*/
  return (
    <>
      <AppBar />
      <div>
        <Suspense fallback={<p>...loading</p>}>
          <Switch>
            {mainRoutes.map(({ path, component, exact }) => (
              <Route
                key={path}
                path={path}
                exact={exact}
                component={component}
              />
            ))}
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
