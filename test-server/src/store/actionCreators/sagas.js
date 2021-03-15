import {put, select, takeLatest, takeLeading, takeEvery,call, take, fork} from "redux-saga/effects"
import {eventChannel} from "redux-saga"

import {CLEAR, COMPLETED, DELETE_ITEM, GET_ITEMS, POST_ITEMS,SOCKET_EVENT} from "../actions/actions";
import socket from "../../../sockets";


export function* sagasWatcher() {
    yield takeLeading(GET_ITEMS, getResponse);
    yield takeLatest(COMPLETED, setComplete);
    yield takeLatest(POST_ITEMS, addNewTodo);
    yield takeLatest(DELETE_ITEM, deleteTodo);



}

function* getResponse() {
    try {
        const payload = yield call(fetchItems);
        yield put({type:GET_ITEMS, payload});
    }
    catch (err){
        alert(err);
    }


}

function* setComplete() {
    const todos = yield select(state => state.asyncList);
    socket.emit('modify');
    const payload =  yield fetch("http://localhost:8000/setComplete", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(todos),
    });
    if(payload){
        alert(payload);
    }

}
function* addNewTodo(){
    const todos = yield select(state => state.asyncList);
    socket.emit('modify');
    yield fetch("http://localhost:8000/addNew", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(todos),
    });

}
function* deleteTodo(){
    const todos = yield select(state => state.asyncList);
    socket.emit('modify');
    yield fetch("http://localhost:8000/deleteTodo", {
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


