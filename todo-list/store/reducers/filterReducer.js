import {createSlice} from "@reduxjs/toolkit";

const filterReducer  =createSlice({
    name:"filterReducer",
    initialState: [],
    reducers:{
        showAll(state){
            console.log(state);
            return true;
        }
    }
})
export  default filterReducer.reducer;
export const {showAll}=filterReducer.actions;