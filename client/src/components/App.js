import React from 'react';
import Modal from './modal/Modal';
import Button from './testButton.js/TestButton';
import Header from './header/Header';
import AuthForm from './auth/AuthForm';
import LibraryForm from './libraryForm/LibraryForm';
import Chart from './chart/Chart';

import LibraryPage from '../pages/library/LibraryPage';

const App = () => {
  return (
    <div>
      <Chart />
      <Button />
      <Modal>
        <h1>Hello</h1>
      </Modal>
      <Header />
      <AuthForm />
      <LibraryPage />
    </div>
  );
};

export default App;
//<LibraryForm />
