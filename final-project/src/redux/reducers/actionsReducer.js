import {ADD_NEW,DELETE,MODIFY} from "../actions/actions";

function actionsReducer(state =[], action){
    switch (action.type){
        case ADD_NEW: return state.concat([{text:action.payload.text, time:action.payload.time || "10" ,modify:false}]);
        case DELETE: return state.filter((item, index)=>{
            if (index !== action.payload) {
                return item;
            }
        })
        case MODIFY: return  {...state[action.payload.index],modify:action.payload.modify}
        default: return state;
    }
}