import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import backburner from './reducers/backburner';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(backburner);

store.subscribe( () => {
    console.log("STORE CHANGED");
    console.log(store.getState());
})

ReactDOM.render(
    (<Provider store={store}>
        <App />
    </Provider>
    ), 
    document.getElementById('root'));
registerServiceWorker();
