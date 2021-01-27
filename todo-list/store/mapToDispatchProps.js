import { bindActionCreators } from 'redux';
import { addItem, deleteItem,completeTodo } from '../store/reducers/listReducer';

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
                    completeTodo: bindActionCreators(completeTodo,dispatch)
                }
            }
    }

}