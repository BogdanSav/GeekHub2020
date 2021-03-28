import {ADD_NEW,DELETE,MODIFY,GET_USER_DATA} from "../actions/actions";
let initialState = []

function actionsReducer(state =initialState, action){
    switch (action.type){
         case GET_USER_DATA: return state.concat(action.payload);
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
export default actionsReducer;