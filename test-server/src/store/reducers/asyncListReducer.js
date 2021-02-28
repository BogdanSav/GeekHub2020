import {COMPLETED, DELETE_ITEM, GET_ITEMS, POST_ITEMS,CLEAR} from "../actions/actions";


export default function asyncListReducer(state = [], action) {
    console.log(action)
    switch (action.type) {
        case GET_ITEMS :
            state=[];
            return state.concat(action.payload);
        case POST_ITEMS :
            return state.concat([{text: action.payload, completed: false}]);
        case DELETE_ITEM:
            return state.filter((item, index) => {
                if (index !== action.payload) {
                    return item;
                }
            });
        case COMPLETED: return state.map((item,index)=>
            index === action.payload? {...item,completed : !item.completed} : item);
        case CLEAR: return state.filter(item=>item.completed===false);
        default:
            return state
    }
}