import {CHANGE_DAY,CHANGE_MONTH} from "../actions/actions";
import moment from "moment";
const initialState = {
    currentMonth: moment().get('month'),
    currentDay: moment().date()
}
function calendarReducer(state = initialState,action){
    console.log(action.payload);
    switch (action.type){
        case CHANGE_MONTH: return {...state,currentMonth: action.payload}
        case CHANGE_DAY: return {...state,currentDay: action.payload}
        default: return state
    }
}
export default calendarReducer;