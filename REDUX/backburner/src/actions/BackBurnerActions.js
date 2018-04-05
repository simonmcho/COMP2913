export default {
    addItemToList(dispatch) {
        console.log(dispatch)
        dispatch({
            type: "ITEM_ADD",
            list: [{ name: "First Item", number: 1}]
        });
    } 
};

