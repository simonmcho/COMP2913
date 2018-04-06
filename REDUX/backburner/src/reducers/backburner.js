const DEFAULT_STATE = {
    list: []
}

const backburner = (state = DEFAULT_STATE, action) => {
    
    switch(action.type) {
        case "ITEM_ADD": {
            const newState = Object.assign({}, state, {
                list: DEFAULT_STATE.list.push(action.value) 
            });
            console.log(action);
            return newState;
            }
        default: {
            return state;
        }
    }
}

export default backburner;