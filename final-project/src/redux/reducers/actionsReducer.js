import {ADD_NEW,DELETE,MODIFY,GET_USER_DATA} from "../actions/actions";
let initialState = []

function actionsReducer(state =initialState, action){

    switch (action.type){
         case GET_USER_DATA: state=[]; return state.concat(action.payload);
        case ADD_NEW: return state.concat([{text:action.payload.text, time:action.payload.time}]);
        case DELETE: return state.filter((item, index)=>{
            if (index !== action.payload) {
                return item;
            }
            else return null;

        })
         case MODIFY: return state.map((item,index)=>{
             if(index === action.payload.index ){
                 item.text = action.payload.text;
                 item.time = action.payload.time;
             }
             return item;
         });
        default: return state;
    }
}
export default actionsReducer;