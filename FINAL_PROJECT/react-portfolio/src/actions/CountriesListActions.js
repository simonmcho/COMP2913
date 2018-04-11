import axios from 'axios';

export default {
    fetchAllCountries (dispatch) {
        dispatch({
            type: "COUNTRIES_LIST/COUNTRIES_ALL",
            showSpinner: true 
        });

        axios.get(`https://restcountries.eu/rest/v2/all`)
                .then(
                    response => {
                        const listOfCountries = response.data;
                        dispatch({
                            type: "COUNTRIES_LIST/COUNTRIES_ALL",
                            countries: listOfCountries,
                            showSpinner: false
                        });
                    }
                ).catch(
                    error => {
                        const listOfCountries = [];
                        dispatch({
                            type: "COUNTRIES_LIST/COUNTRIES_ALL",
                            countries: listOfCountries,
                            showSpinner: false
                        })
                    }
                );
    },
    fetchSearchedCountries (dispatch, apiToUse) {
        dispatch({
            type: "COUNTRIES_LIST/COUNTRIES_SEARCHED",
            showSpinner: true 
        });
        
        axios.get(apiToUse)
            .then(
                response => {
                    const listOfCountries = response.data;
                    dispatch({
                        type: "COUNTRIES_LIST/COUNTRIES_SEARCHED",
                        countries: listOfCountries,
                        showSpinner: false
                    });
            }).catch(
                error => {
                    const listOfCountries = [];
                    dispatch({
                        type: "COUNTRIES_LIST/COUNTRIES_SEARCHED",
                        countries: listOfCountries,
                        showSpinner: false
                    })
                }
            );
    }
}