import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import store, { persistor } from './redux/store';
import Favicon from 'react-favicon';
import App from './components/App';
import FaviconIco from './assets/favicon.png';
import './index.css';

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
