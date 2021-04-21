import React from 'react';
import Modal from './modal/Modal'
import Button from './testButton.js/TestButton'
import Header from './header/Header';
import AuthForm  from './auth/AuthForm'

const App = () => {
    return (
        <div>
            <Button />
            <Modal>
                <h1>Hello</h1>
            </Modal>
            <Header />
            <AuthForm />
        </div>
    );
};

export default App;
