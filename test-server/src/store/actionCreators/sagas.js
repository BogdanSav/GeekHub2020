import {put, select, takeLatest, takeLeading, takeEvery,call, take, fork} from "redux-saga/effects"
import {eventChannel} from "redux-saga"

import {CLEAR, COMPLETED, DELETE_ITEM, GET_ITEMS, POST_ITEMS,SOCKET_EVENT} from "../actions/actions";
import socket from "../../../sockets";




export function* sagasWatcher() {
    yield takeLeading(GET_ITEMS, getResponse);
    yield takeLatest([POST_ITEMS, DELETE_ITEM, COMPLETED, CLEAR], postResponse);


}



// const createSocketChannel= socket =>eventChannel((emit)=>{
//     const handler = (data)=>{
//         emit(data);
//     }
//     socket.on('responseData',handler);
//     return()=>{
//         socket.off('responseData',handler);
//     };
// })
function* getResponse() {
    let data = new Promise((resolve => {
        socket.on("responseData",(data)=>{
            resolve(data);
        })
    }))
    const response = yield data.then(data=>{return data});
    yield console.log(response);
    yield put({type:GET_ITEMS,payload:JSON.parse(response)});

}

function* postResponse() {
    const todos = yield select(state => state.asyncList);
    socket.emit('saveData',todos);

    // const todos = yield select(state => state.asyncList);
    // yield fetch("http://localhost:8000/post", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json;charset=utf-8'
    //     },
    //     body: JSON.stringify(todos),
    // });

}

// async function fetchItems() {
//     const response = await fetch("http://localhost:8000/all");
//     return await response.json();
// }
// function data (payload){
//    return payload;
// }

