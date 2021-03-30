import {CHANGE_DAY, CHANGE_MONTH, GET_ACTIONS_COUNT} from "../actions/actions";
import moment from "moment";
const initialState = {
    currentMonth: moment().get('month'),
    currentDay: moment().date(),
    actionCount: [],
    id:0

}
function calendarReducer(state = initialState,action){
    switch (action.type){
        case CHANGE_MONTH: return {...state,currentMonth: action.payload}
        case CHANGE_DAY: return {...state,currentDay: action.payload}
        case GET_ACTIONS_COUNT: return {...state,
                actionCount: state.actionCount.concat(action.payload.action),
                id: action.payload.id
        };
        default: return state
    }
}
export default calendarReducer;