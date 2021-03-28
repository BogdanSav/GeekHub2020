import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import registrationReducer from "./registrationReducer";
import calendarReducer from "./calendarReducer";
import actionsReducer from "./actionsReducer";
const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    calendar: calendarReducer,
    actions: actionsReducer
})
export default rootReducer;