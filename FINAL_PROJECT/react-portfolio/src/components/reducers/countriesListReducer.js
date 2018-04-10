const DEFAULT_STATE = {
    searchedCountries: []
};

const countriesListReducer = (state = DEFAULT_STATE, action) => {
    console.warn("REDUCER HAS STATE BELOW")
    console.warn(state);
    console.warn(action);
   switch(action.type) {
       case "ALL_COUNTRIES": {
           const newState = Object.assign({}, state, {
            searchedCountries: state.searchedCountries.concat(action.countries)
           });

           return newState;
       }
       default : {
           return state;
       }
   }

}

export default countriesListReducer;