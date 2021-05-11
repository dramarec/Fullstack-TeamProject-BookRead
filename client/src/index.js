import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import Favicon from 'react-favicon';
import FaviconIco from './assets/favicon.png';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Favicon url={FaviconIco} />
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
