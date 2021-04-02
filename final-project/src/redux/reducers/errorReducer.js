import {ERROR} from "../actions/actions";

export default function errorReducer (state="",action){
    switch (action.type){
        case ERROR: return action.payload;
        default:return state;
    }

}