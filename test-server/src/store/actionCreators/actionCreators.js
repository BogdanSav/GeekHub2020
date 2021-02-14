import {ADD_ITEM, COMPLETED, DELETE_ITEM,GET_ITEMS} from '../actions/actions';

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
    return async dispatch=>{
        const response = await fetch("http://localhost:8000/all");
        const items = await response.json();
        dispatch({ type: GET_ITEMS, payload: items})
    }
}
export function postItems(items){

}
