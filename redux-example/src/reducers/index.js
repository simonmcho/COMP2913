// What is a reducer?
// A function that takes 2 params
// current state
// action

const initialState = {
    articles: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_ARTICLE":
            return { ...state, articles: [...state.articles, action.payload] };
            //state.articles.push(action.payload); // DO NOT DO THIS, AS IT BREAKS THE IMMUTABILITY PRINCIPLE
            //return state;
        default:
            return state;
    }
}

export default rootReducer;

// We know that reducers produce the state of the app
// how does the reducer know when to produce the next state?
// The only way to change state is to send a signal to the store. This is the action

// Dispatching an action is the process of sending a signal

// Two methods for avoiding redux mutations:
// 1. concat, slice, and ...spread
// 2. Object.assign and ...spread

