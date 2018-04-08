import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './components/reducers/reducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

store.subscribe(()=> {
    console.log("NEW STORE CREATED!")
});

ReactDOM.render((
<Provider>
    <App />
</Provider>), 
document.getElementById('root'));

registerServiceWorker();
