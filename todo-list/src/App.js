import React from 'react';
import TODOHEADER from "./ToDoHeader";
import TODOLIST from "./ToDoList";
import ToDoFilters from './ToDoFilters';
import './index.css'
class App extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <section className="todoapp">
                <TODOHEADER/>
                <TODOLIST/>
                <ToDoFilters/>
            </section>
        );
    }

}
export default App;