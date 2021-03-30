import {CHANGE_DAY, CHANGE_MONTH, SET_ACTIONS_COUNT} from "../actions/actions";
import moment from "moment";

const initialState = {
    currentMonth: moment().get('month'),
    currentDay: moment().date(),
    actionCount: {},
}

function calendarReducer(state = initialState, action) {
    console.log()
    switch (action.type) {
        case CHANGE_MONTH:
            return {...state, currentMonth: action.payload}
        case CHANGE_DAY:
            return {...state, currentDay: action.payload}
        case SET_ACTIONS_COUNT:
            return {
                ...state,
                actionCount: action.payload.action,

            };
        default:
            return state
    }
}

export default calendarReducer;