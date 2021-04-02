import {put, select, takeLatest, takeLeading} from "redux-saga/effects";
import {
    ADD_NEW,
    DELETE,
    GET_ACTIONS_COUNT,
    GET_USER_DATA,
    LOGGING_DATA,
    LOGIN_AUTH,
    MODIFY,
    REGISTER,
    REGISTER_NEW_USER,
    SET_ACTIONS_COUNT,
} from "../actions/actions";
const url = "http://localhost:5000";
export default function* sagaWatcher() {
    yield takeLeading(REGISTER_NEW_USER, registerUser);
    yield takeLeading(LOGGING_DATA, logIn);
    yield takeLeading(GET_USER_DATA, getUserData);
    yield takeLatest([ADD_NEW, DELETE, MODIFY], changeAction);
    yield takeLeading(GET_ACTIONS_COUNT, getActionsCount)
}

function* registerUser() {
    const registrationData = yield select(state => state.registration.registrationData);

    try {
        const response = yield fetch(`${url}/registerUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "Accept": "application/json",
            },
            body: JSON.stringify(registrationData),
        });
        const message = yield response.json();
        yield alert(message.message);
        yield put({type: REGISTER, payload: message.state})
    } catch (e) {
        console.log(e);
    }

}

function* logIn() {
    const login = yield select(state => state.login.loginingData);
    try {
        const jsonResp = yield fetch(`${url}/loggingIn`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "Accept": "application/json",
            },
            body: JSON.stringify(login),
        });
        const response = yield jsonResp.json();
        if (!response.message.status) {
            alert(response.message.text);
        }
        yield put({type: LOGIN_AUTH, payload: response.message.status});
    } catch (e) {
        yield console.log(e);
    }

}

function* getUserData() {
    const email = yield select(state => state.login.loginingData.email || state.registration.registrationData.email);
    const month = yield select(state => state.calendar.currentMonth);
    const day = yield select(state => state.calendar.currentDay);
    try {
        const jsonResp = yield fetch(`http://localhost:5000/getUserData`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "Accept": "application/json",
            },
            body: JSON.stringify({email, month, day}),
        });
        const response = yield jsonResp.json();
        yield put({type: GET_USER_DATA, payload: response.data});
    } catch (e) {
        yield console.log(e);
    }
}

function* changeAction() {
    const email = yield select(state => state.login.loginingData.email || state.registration.registrationData.email);
    const month = yield select(state => state.calendar.currentMonth);
    const day = yield select(state => state.calendar.currentDay);
    const item = yield select(state => state.actions);
    try {
        yield fetch("http://localhost:5000/addAction", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "Accept": "application/json",
            },
            body: JSON.stringify({email, month, day, item}),
        });
    } catch (e) {
        yield console.log(e);
    }

}

function* getActionsCount() {
    const email = yield select(state => state.login.loginingData.email || state.registration.registrationData.email);
    const id = yield select(state => state.calendar.currentMonth);
    try {
        const jsonResp = yield fetch("http://localhost:5000/getActionsCount", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "Accept": "application/json",
            },
            body: JSON.stringify({email, id}),
        });
        const response = yield jsonResp.json();
        yield put({type: SET_ACTIONS_COUNT, payload: {action: response}});
    } catch (e) {
        yield console.log(e);
    }
}