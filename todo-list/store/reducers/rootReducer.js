import {combineReducers} from "redux";
import reducer from "./listReducer";
import filterReducer from './filterReducer';


const rootReducer = combineReducers(
    {
        todos: reducer,
        filter: filterReducer
    }
)
export default rootReducer;