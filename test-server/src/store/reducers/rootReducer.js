import {combineReducers} from "redux";
import reducer from "./listReducer";
import filterReducer from './filterReducer';
import asyncListReducer from './asyncListReducer'
import loaderReducer from "./loaderReducer";


const rootReducer = combineReducers(
    {
        todos: reducer,
        filter: filterReducer,
        asyncList: asyncListReducer,
        // loaderReducer: loaderReducer
    }
)
export default rootReducer;