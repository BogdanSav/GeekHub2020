import { ADD_ITEM, DELETE_ITEM } from '../actions/actions';

function reducer(state, action) {
    console.log(action, state);
    switch (action.type) {
        case ADD_ITEM:
            return { items: state.items.concat([action.item]) }

        case DELETE_ITEM:
            return { items: state.items.splice(action.index - 1, 1) };
        default:
            return state;
    }

}
export default reducer;