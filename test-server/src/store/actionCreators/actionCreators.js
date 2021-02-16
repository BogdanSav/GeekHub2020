import {
    ADD_ITEM,
    CLEAR,
    COMPLETED,
    DELETE_ITEM,
    GET_ITEMS,
    HIDE_LOADER,
    POST_ITEMS,
    SHOW_LOADER
} from '../actions/actions';
import {useSelector} from "react-redux";

export function addItem(payload) {
    return {
        type: ADD_ITEM,
        payload
    }
}
export function deleteItems(payload) {
    return {
        type: DELETE_ITEM,
        payload
    }
}
export function setComplete(payload) {
    return{
        type: COMPLETED,
        payload
    }

}
export function getItems (payload){

   return{
       type: GET_ITEMS,
         payload
   }
}
export function postItems(payload){
    return{
        type: POST_ITEMS,
        payload
    }
}
export function _clearCompleted(){
    return {
        type :CLEAR,
    }
}


