export default function mapToStateProps(component) {
    switch (component) {
        case 'ToDoList' :
            return function (state) {
                return {
                    value: state.todos,
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
                    completed: state.todos.completed
                }
            }
    }

};