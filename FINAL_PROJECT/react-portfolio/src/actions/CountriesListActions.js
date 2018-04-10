import axios from 'axios';

export default {
    fetchAllCountries (dispatch) {
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
                ).catch(error => {
                    dispatch({
                        type: "COUNTRIES_LIST/COUNTRIES_ALL",
                        showSpinner: true
                    });
                });
    },
    fetchSearchedCountries (dispatch, apiToUse) {
        // console.warn("ACTION BELOW!!");
        // console.log(apiToUse);
        axios.get(apiToUse)
            .then(
                response => {
                    const listOfCountries = response.data;
                    dispatch({
                        type: "COUNTRIES_LIST/COUNTRIES_SEARCHED",
                        countries: listOfCountries
                    });
            }).catch(error => {
                dispatch({
                    type: "COUNTRIES_LIST/COUNTRIES_SEARCHED",
                    showSpinner: true
                });
            });
    }
}