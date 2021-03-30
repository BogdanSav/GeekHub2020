import {REGISTER_NEW_USER,REGISTER} from "../actions/actions";

let initialSate = {
    register:false,
    registrationData:{}
}

function registrationReducer(state = initialSate, action) {

    switch (action.type) {
        case REGISTER: return {...state, register: action.payload};
        case REGISTER_NEW_USER:
            return {...state,registrationData:Object.assign(state.registrationData, action.payload) } ;
        default:
            return state;
    }
}

export default registrationReducer;

