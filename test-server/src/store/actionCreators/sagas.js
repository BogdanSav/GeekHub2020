import {takeEvery, call, put, takeLatest, takeLeading, select} from "redux-saga/effects"

import {CLEAR, COMPLETED, DELETE_ITEM, GET_ITEMS, POST_ITEMS} from "../actions/actions";


// const todos = useSelector(state=>state.asyncList);
export function* sagasWatcher() {
    yield takeLeading(GET_ITEMS, getResponse);
    yield takeLatest([POST_ITEMS,DELETE_ITEM,COMPLETED,CLEAR], postResponse);

}

function* getResponse() {
    const payload = yield call(fetchItems);
    yield put({type:GET_ITEMS, payload});
}

function* postResponse(){
    const todos = yield select(state => state.asyncList);
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

