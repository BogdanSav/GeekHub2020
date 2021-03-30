import { LOGGING_IN,LOGGING_DATA,LOGIN_AUTH } from "../actions/actions";
let initialState = {
    loggedIn:false,
    loginingData: {},
    auth:false
}
function loginReducer(state=initialState,action) {

    switch (action.type) {
        case LOGIN_AUTH:return {...state,auth: action.payload};
        case LOGGING_IN : return {...state,loggedIn: action.payload};
        case LOGGING_DATA : return {...state, loginingData: Object.assign(state.loginingData,action.payload)}
        default :return state;
    }
}
export default loginReducer;