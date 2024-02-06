import { takeEvery } from 'redux-saga/effects';
import { setDataWorker } from './workers/setData.js';
import { setDataAsyncAction } from './asynkActions.js';
import { clearDataAsyncAction } from './asynkActions.js';
import { clearListWorker} from "./workers/clearList.js";
export function* watcher() {
    yield takeEvery(setDataAsyncAction.type, setDataWorker);
    yield takeEvery(clearDataAsyncAction.type, clearListWorker);
}