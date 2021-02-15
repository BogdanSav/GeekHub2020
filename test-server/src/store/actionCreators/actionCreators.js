import {ADD_ITEM, COMPLETED, DELETE_ITEM, GET_ITEMS, POST_ITEMS} from '../actions/actions';
import {useSelector} from "react-redux";

export function addItem(item) {
    return {
        type: ADD_ITEM,
        item: item
    }
}
export function deleteItem(index) {
    return {
        type: DELETE_ITEM,
        index: index
    }
}
export function setComplete(value) {
    return{
        type: COMPLETED,
        value : value
    }

}
export function getItems (){

   return{
       type: GET_ITEMS,
        payload :{text: "First", completed: false}
   }
}
export function postItems(payload){
    return{
        type: POST_ITEMS,
        payload
    }
}

