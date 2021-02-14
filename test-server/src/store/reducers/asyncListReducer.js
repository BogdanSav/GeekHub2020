import {GET_ITEMS} from "../actions/actions";

export default function asyncListReducer (state =[],action){
    console.log(action)
    switch (action.type) {
        case GET_ITEMS : return  state.concat(action.payload);
        default: return state
    }
}