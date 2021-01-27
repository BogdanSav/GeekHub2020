import {ADD_ITEM, COMPLETED, DELETE_ITEM} from '../actions/actions';

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