import {takeEvery,call, put ,takeLatest, takeLeading, select} from "redux-saga/effects"
import {GET_ITEMS, POST_ITEMS} from "../actions/actions";
import {useSelector} from "react-redux";
// const todos = useSelector(state=>state.asyncList);
export  function* sagasWatcher(){
   yield takeLeading(GET_ITEMS,getResponse);
   yield takeLatest(POST_ITEMS,postResponse);

}
function* getResponse(){

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
async function fetchItems(){
   const response = await  fetch("http://localhost:8000/all");
   return await response.json();
}

