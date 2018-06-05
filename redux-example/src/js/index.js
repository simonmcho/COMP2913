// import store from '../store';
// import { addArticle } from '../actions';

// window.store = store;
// window.addArticle = addArticle;

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from './components/App';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('App')
)

