import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import registrationReducer from "./registrationReducer";
import calendarReducer from "./calendarReducer";
import actionsReducer from "./actionsReducer";
import errorReducer from "./errorReducer";
const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    calendar: calendarReducer,
    actions: actionsReducer,
    error:errorReducer,

})
export default rootReducer;