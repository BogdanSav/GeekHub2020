import {createSlice} from "@reduxjs/toolkit";

const filterReducer  =createSlice({
    name:"filterReducer",
    initialState: "ALL",
    reducers:{
       setVisibilityFilter(state,action){
           return action.payload;
       },
    }
})
export  default filterReducer.reducer;
export const {setVisibilityFilter}=filterReducer.actions;