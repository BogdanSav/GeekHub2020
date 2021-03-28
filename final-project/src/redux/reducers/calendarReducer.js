import {CHANGE_DAY,CHANGE_MONTH} from "../actions/actions";
import moment from "moment";
const initalState = {
    currentMonth: moment().get('month')
}
function calendarReducer(state = initalState,action){
    console.log(action.payload);
    switch (action.type){
        case CHANGE_MONTH: return {...state,currentMonth: action.payload}
        default: return state
    }
}
export default calendarReducer;