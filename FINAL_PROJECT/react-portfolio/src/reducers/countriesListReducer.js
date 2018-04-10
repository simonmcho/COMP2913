const DEFAULT_STATE = {
    searchedCountries: [],
    showSpinner: false
};

const countriesListReducer = (state = DEFAULT_STATE, action) => {

   switch(action.type) {
       case "COUNTRIES_LIST/COUNTRIES_ALL": {
           const newState = Object.assign({}, state, {
            searchedCountries: action.countries,
            showSpinner: action.showSpinner
           });

           return newState;
       }
       case "COUNTRIES_LIST/COUNTRIES_SEARCHED": {
           const newState = Object.assign({}, state, {
               searchedCountries: action.countries,
               showSpinner: action.showSpinner
           })

           return newState;
       }
       default : {
           return state;
       }
   }

}

export default countriesListReducer;