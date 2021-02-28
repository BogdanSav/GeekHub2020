import {put, select, takeLatest, takeLeading, takeEvery,call, take, fork} from "redux-saga/effects"
import {eventChannel} from "redux-saga"

import {CLEAR, COMPLETED, DELETE_ITEM, GET_ITEMS, POST_ITEMS,SOCKET_EVENT} from "../actions/actions";
import socket from "../../../sockets";


export function* sagasWatcher() {
    yield takeLeading(GET_ITEMS, getResponse);
    yield takeLatest([POST_ITEMS,DELETE_ITEM,COMPLETED, CLEAR], postResponse);


}

function* getResponse() {
    const payload = yield call(fetchItems);
    yield put({type:GET_ITEMS, payload});

}

function* postResponse() {
    const todos = yield select(state => state.asyncList);
    socket.emit('modify');
    yield fetch("http://localhost:8000/post", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(todos),
    });

}


async function fetchItems() {
    const response = await fetch("http://localhost:8000/all");
    return await response.json();
}


