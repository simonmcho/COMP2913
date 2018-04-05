const DEFAULT_STATE = {
    list: []
}

const backburner = (state = DEFAULT_STATE, action) => {
    // console.log(action)
    switch(action.type) {
        case "ITEM_ADD": {
            const newState = Object.assign({}, state, {
                list: action.list
            });

            return newState;
            }
        default: {
            return state;
        }
    }
}

export default backburner;