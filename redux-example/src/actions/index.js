// An action is a javascript object
// Every action needs a type property for describing how the state should change

// Best practice is to wrap action in a function. This is called an action creator

import { ADD_ARTICLE } from '../constants';

export const addArticle = article => ({
    type: ADD_ARTICLE,
    payload: article
});