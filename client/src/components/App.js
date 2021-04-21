import React from 'react';
import Modal from './modal/Modal'
import Button from './testButton.js/TestButton'

const App = () => {
    return (
        <div>
            <Button />
            <Modal>
                <h1>Hello</h1>
            </Modal>
        </div>
    );
};

export default App;
