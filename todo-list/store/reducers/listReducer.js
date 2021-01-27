// import { ADD_ITEM, DELETE_ITEM, COMPLETED } from '../actions/actions';
import {createSlice} from "@reduxjs/toolkit";

const  initialState ={
    items:[],
    completed: false,
}
const listReducer = createSlice(
    {
        name:"listReducer",
        initialState,
        reducers:{
            addItem(state,action){
                return {items: state.items.concat([action.payload])};
            },
            deleteItem(state,action){
                return {items: state.items.filter((item,index)=>{
                    if(index != action.payload){
                        return item;
                    }})};
            },
            completeTodo(state){
                return {
                    items: state.items,
                    completed: !state.completed
                }
            }

        }

    }
)
export default listReducer.reducer;
export const {addItem ,deleteItem ,completeTodo} = listReducer.actions;
