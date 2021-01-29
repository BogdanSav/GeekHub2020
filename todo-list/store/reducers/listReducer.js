// import { ADD_ITEM, DELETE_ITEM, COMPLETED } from '../actions/actions';
import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        text: "ToDolist using react-redux",
        completed: false
    }
]
const listReducer = createSlice(
    {
        name: "listReducer",
        initialState,
        reducers: {
            addItem(state, action) {
                return state.concat({
                    text : action.payload,
                    completed: false,
                });
            },
            deleteItem(state, action) {
                return state.filter((item, index) => {
                        if (index !== action.payload) {
                            return item;
                        }
                    })
            },
            completeTodo(state,action) {
                return state.map((item,index)=>
                    index === action.payload? {...item,completed : !item.completed} : item);
            },
            completeAll(state){
                const allMarked = state.every(item => item.completed);
                return state.map(item =>({
                    ...item,
                    completed: !allMarked,
                }));
            },
            clearCompleted(state){
              return state.filter(item=>item.completed===false);
            },
            showAll(state){
                return state.map(item=>item);
            },
            showActive(state){
                return state.map(item=>!item.completed ? item : "");
            },
            showCompleted(state){
              return state.map(item=>item.completed);
            }



        }

    }
)
export default listReducer.reducer;
export const {addItem, deleteItem, completeTodo,completeAll ,showAll,showActive,showCompleted,clearCompleted} = listReducer.actions;
