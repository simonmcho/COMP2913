export default {

    addItemToList(dispatch, value) {
        // console.log(dispatch)
        // console.log(value);
        dispatch({
            type: "ITEM_ADD",
            list: value 
        });
    } 
};

