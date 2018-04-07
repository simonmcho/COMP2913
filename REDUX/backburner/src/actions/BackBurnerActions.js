export default {

    addItemToList(dispatch, value) {
        // console.log(dispatch)
        console.log("BELOW IS VALUE FROM ACTIONS");
        console.log(value);
        dispatch({
            type: "ITEM_ADD",
            item: value 
        });
    } 
};

