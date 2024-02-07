import {put, delay, select } from 'redux-saga/effects';
import todoSlice from "../../redux/todoSlice.js";
import selectors from "../../redux/selectors.js";

export function* setDataWorker(action) {
    const { payload } = action;
    payload.preventDefault();
    yield put(todoSlice.actions.setLoading(true));
    yield delay(1000);

    const inputValue = payload.target.text_input.value;
    yield put(todoSlice.actions.addItem(inputValue));
    yield put(todoSlice.actions.setLoading(false));
    payload.target.text_input.value = '';

    const items = yield select(selectors.itemsSelector);
    localStorage.setItem('items', JSON.stringify(items));
}