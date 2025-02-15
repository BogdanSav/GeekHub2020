import {getVisibleTodos} from "./selectors/selector";

export default function mapToStateProps(component) {
    switch (component) {
        case 'ToDoList' :
            return function (state) {
                return {
                    value: getVisibleTodos(state),
                };

            }
        case 'ToDoFilters':
            return function (state){
                return {
                    count: state.todos,

                }
            }
        case  'ToDoListItem':
            return function (state){
                return{
                    state: state.todos,
                }
            }
        case 'FilterLink' :
            return function (state,action){
                return{
                    state: state.todos
                }
            }
    }

};