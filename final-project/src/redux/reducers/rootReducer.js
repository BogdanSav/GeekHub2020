import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import registrationReducer from "./registrationReducer";
const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer
})
export default rootReducer;