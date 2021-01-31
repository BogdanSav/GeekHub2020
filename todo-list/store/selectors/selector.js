import {createSelector} from 'reselect';
const getVisibilityFilter = state => state.filter;
const getTodos = state => state.todos;
export const getVisibleTodos = createSelector([getVisibilityFilter,getTodos],(filter,todos)=>{
    switch (filter) {
        case "ALL":
            return todos;
        case "COMPLETED":
            return todos.filter(t => t.completed);
        case "ACTIVE":
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' +filter);
    }
})