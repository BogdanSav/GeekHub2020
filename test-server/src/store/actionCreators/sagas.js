import {put, select, takeLatest, takeLeading, takeEvery,call, take} from "redux-saga/effects"
import {eventChannel} from "redux-saga"

import {CLEAR, COMPLETED, DELETE_ITEM, GET_ITEMS, POST_ITEMS,SOCKET_EVENT} from "../actions/actions";
import socket from "../../../sockets";



// const todos = useSelector(state=>state.asyncList);
export function* sagasWatcher() {
    yield takeLeading(GET_ITEMS, getResponse);
    yield takeLatest([POST_ITEMS, DELETE_ITEM, COMPLETED, CLEAR], postResponse);
    // yield takeEvery(SOCKET_EVENT,socketResponse)

}

// const connect = ()=>{
//     return new Promise((resolve => {
//         socket.on('connection',()=>{
//             resolve(socket);
//         })
//     }))
// }

const createSocketChannel= socket =>eventChannel((emit)=>{
    const handler = (data)=>{
        emit(data);
    }
    socket.on('responseData',handler);
    return()=>{
        socket.off('responseData',handler);
    };
})
function* getResponse() {
   // const sockets = yield call(connect);
   const socketChannel = yield call(createSocketChannel,socket);

   const payload = yield take(socketChannel);
   yield console.log(payload);
    // const payload = yield call(fetchItems);
    // yield put({type: GET_ITEMS, payload});
}

function* postResponse() {
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

