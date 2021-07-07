import { createStore } from 'redux';
import rootReducer from '../reducers'; // state comes from the reducers

const store = createStore(rootReducer); // createStore() is the function to create redux store

export default store;

// Reducers produce the state. You don't create the state manually
// The state lives as a single, immutable object within the store
// As soon as the store receives an action, it triggers a reducer
// The reducer returns the next state