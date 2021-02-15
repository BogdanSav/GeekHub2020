import {GET_ITEMS, POST_ITEMS} from "../actions/actions";

const initSatate =[{
    text: "Make async todolist",
    completed: false,
}]
export default function asyncListReducer (state =[],action){
    console.log(action)
    switch (action.type) {
        case GET_ITEMS : return  state.concat(action.payload);
        case POST_ITEMS :return  state.concat([{ text: action.payload}]);
        default: return state
    }
}