import {combineReducers} from "redux";
import reducer from "./listReducer";
import filterReducer from './filterReducer';


const rootReducer = combineReducers(
    {
        todos: reducer,
    }
)
export default rootReducer;