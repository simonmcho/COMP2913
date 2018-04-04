// A reducer is just a single function

const DEFAULT_STATE = {
    forecast: [],
    isLoading: false
};

const weather = (state = DEFAULT_STATE, action) => {

    switch(action.type) {
        case "WEATHER_FORECAST_FETCH_SUCCESS": {
            const newState = Object.assign({}, state, {
                forecast: action.forecast
            });

            return newState;
        }
        case "WEATHER_FORECAST_FETCH_PENDING": {
            return Object.assign({}, state, { isLoading: true });
        }
        case "WEATHER_FORECAST_CLEAR": {
            return DEFAULT_STATE;
        }
        default : {
            return state;
        }
    }

}

export default weather;