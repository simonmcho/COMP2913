import axios from 'axios';

export default {
    fetchAllCountries (dispatch) {
        axios.get(`https://restcountries.eu/rest/v2/all`)
                .then(
                    response => {
                        const listOfCountries = response.data;
                        dispatch({
                            type: "ALL_COUNTRIES",
                            countries: listOfCountries
                        });
                    }
                )
    }
}