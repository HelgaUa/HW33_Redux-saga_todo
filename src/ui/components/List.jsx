import { ListItem } from "./ListItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import selectors from "../../engine/todo/redux/selectors.js";
import todoSlice from "../../engine/todo/redux/todoSlice.js";
import { useEffect } from "react";
import { getDataAsyncAction } from '../../engine/todo/saga/asyncActions.js'

export function List() {
    const items = useSelector(selectors.itemsSelector);
    const dispatch = useDispatch();
    const handleRemoveItem = (id) => {
        dispatch(todoSlice.actions.removeItem(id));
    }

    useEffect(() => {
        dispatch(getDataAsyncAction());
    }, []);
    console.log(items);
    return (
        <>
            <br/>
            {items.length === 0
                ? <span>No items</span>
                : (
                    <ul className="list">
                    {items.map(item => <ListItem key={item.id} onClick = {()=> handleRemoveItem(item.id)}>{item.text}</ListItem>)}
                    </ul>
                )}
        </>
    )
}