const reducer = (state, action) => {
    state = Object.assign({}, state, {
        name: "SIMON"
    });

    return state;
}

export default reducer;