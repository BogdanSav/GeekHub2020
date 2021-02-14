import {combineReducers} from "redux";
import reducer from "./listReducer";
import filterReducer from './filterReducer';
import asyncListReducer from './asyncListReducer'


const rootReducer = combineReducers(
    {
        todos: reducer,
        filter: filterReducer,
        asyncList: asyncListReducer,
    }
)
export default rootReducer;