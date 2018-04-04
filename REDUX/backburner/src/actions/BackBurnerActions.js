export default {
    addItemToList(dispatch) {
        dispatch({
            type: "ITEM_ADD",
            list: [{ name: "First Item", number: 1}]
        });
    } 
};

