import React, { Suspense } from 'react';

// import Modal from './modal/Modal';
// import Button from './testButton.js/TestButton';
// import AuthForm from './auth/AuthForm';
// import LibraryForm from './libraryForm/LibraryForm';
// import Chart from './chart/Chart';
// import LibraryPage from '../pages/library/LibraryPage';
import AppBar from './appBar/AppBar';
import { Switch, Route } from 'react-router-dom';
import mainRoutes from '../routes/routes';

// import { publicRoutes } from '../routes/publicRoutes';

const App = () => {
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
    </>
  );
};

export default App;

{
  /* <div>
 <AuthForm />
<LibraryForm />
<LibraryPage />
  <Chart />
  <Button />
  <Modal>
    <h1>Hello</h1>
  </Modal>
  <Header />
  <LibraryPage />
</div> */
}
