import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import countriesListReducer from './reducers/countriesListReducer.js';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(countriesListReducer);

store.subscribe(()=> {
    console.log("NEW STORE CREATED!")
});

ReactDOM.render((
<Provider store={store}>
    <App />
</Provider>), 
document.getElementById('root'));

registerServiceWorker();
