import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppBasket from './BasketApp';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppBasket />
        </Provider>
    </React.StrictMode>,
    document.getElementById('rootBasket')
);
serviceWorker.unregister();