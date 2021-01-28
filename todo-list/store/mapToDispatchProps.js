import { bindActionCreators } from 'redux';
import { addItem, deleteItem,completeTodo,completeAll,showAll,showActive,showCompleted,clearCompleted } from './reducers/listReducer';

export default function mapToDispatchProps(component) {
    switch (component){
        case "ToDoHeader":
            return function (dispatch){
                return {
                    addItem: bindActionCreators(addItem, dispatch)
                }
            }
        case "ToDoListItem":
            return function (dispatch){
                return{
                    deleteItem: bindActionCreators(deleteItem, dispatch),
                    completeTodo: bindActionCreators(completeTodo,dispatch),

                }
            }
        case "ToDoList" :
            return function (dispatch){
                return {
                    completeAll : bindActionCreators(completeAll,dispatch)
                }
            }
        case "ToDoFilters" :
            return function (dispatch){
                return{
                    All : bindActionCreators(showAll,dispatch),
                    Active : bindActionCreators(showActive,dispatch),
                    Completed : bindActionCreators(showCompleted,dispatch),
                    clear: bindActionCreators(clearCompleted,dispatch)
                }
            }
    }

}