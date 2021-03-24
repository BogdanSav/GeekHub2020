import {takeLatest,select,takeLeading,takeEvery} from "redux-saga/effects";
import {REGISTER_NEW_USER} from "../actions/actions";

export default function* sagaWatcher (){
    yield takeLatest(REGISTER_NEW_USER,registerUser);
}

function * registerUser(){
    const registrationData =  yield select(state=>state.registration);
    if(Object.keys(registrationData).length>2){
        try {
            yield fetch("http://localhost:5000/registerUser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "Accept":"application/json",
                },
                body: JSON.stringify(registrationData),
            });
        }
        catch (e){
            console.log(e);
        }
    }

}