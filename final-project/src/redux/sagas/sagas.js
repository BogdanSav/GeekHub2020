import {takeLatest,select,takeLeading,takeEvery,put} from "redux-saga/effects";
import {REGISTER_NEW_USER, LOGGING_DATA, LOGIN_AUTH, GET_USER_DATA} from "../actions/actions";

export default function* sagaWatcher (){
    yield takeLatest(REGISTER_NEW_USER,registerUser);
    yield takeLeading(LOGGING_DATA,logIn);
    yield takeLeading(GET_USER_DATA,getUserData);
}

function * registerUser(){
    const registrationData =  yield select(state=>state.registration.registrationData);
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

function * logIn(){
    const login =  yield select(state=>state.login.loginingData);
    if(Object.keys(login).length>1) {
        try {
             const jsonResp = yield fetch("http://localhost:5000/loggingIn", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "Accept": "application/json",
                },
                body: JSON.stringify(login),
            });
           const response = yield jsonResp.json();

           yield console.log(response.message);
           yield put({type:LOGIN_AUTH,payload:response.message});
        } catch (e) {
           yield console.log(e);
        }
    }

}
function* getUserData(){
    const data ={ email:"testUser@test.com", month:2, day:28 }
        try {
            const jsonResp = yield fetch("http://localhost:5000/getUserData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "Accept": "application/json",
                },
                body: JSON.stringify(data),
            });
            const response = yield jsonResp.json();

            yield console.log(response.data);
             yield put({type:GET_USER_DATA,payload:response.data});
        } catch (e) {
            yield console.log(e);
        }

}