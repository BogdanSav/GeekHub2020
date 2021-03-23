import { REGISTER } from "../actions/actions";

function loginReducer(state=false,action) {
    switch (action.type) {
        case REGISTER : return action.payload;
        default :return state;
    }
}
export default loginReducer;