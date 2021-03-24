import {REGISTER_NEW_USER} from "../actions/actions";

let initialSate = {}

function registrationReducer(state = initialSate, action) {
    console.log(state);
    switch (action.type) {
        case REGISTER_NEW_USER:
            return Object.assign(state, action.payload);
        default:
            return state;
    }
}

export default registrationReducer;

