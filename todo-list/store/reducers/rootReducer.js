import {combineReducers} from "redux";
import reducer from "./listReducer";

const rootReducer = combineReducers(
    {
        todos: reducer
    }
)
export default rootReducer;