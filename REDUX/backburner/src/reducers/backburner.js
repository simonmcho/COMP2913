const DEFAULT_STATE = {
    list: []
}

const backburner = (state = DEFAULT_STATE, action) => {
    
    switch(action.type) {
        case "ITEM_ADD": {
            const newState = Object.assign({}, state, {
                list: state.list.concat(action.item)
            });
            console.log(state);
            console.log(newState);
            return newState;
            }
        default: {
            return state;
        }
    }
}

export default backburner;