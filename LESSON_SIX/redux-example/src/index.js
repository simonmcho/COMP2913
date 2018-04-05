import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import weather from './reducers/weather.js';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(weather);

ReactDOM.render(
(<Provider store={store}>
    <App />
</Provider>), document.getElementById('root'));
registerServiceWorker();

//https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

// fire action
// catch in reducer
// available in container
