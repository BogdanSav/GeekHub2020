import React from 'react';
import ToDoHeader from "./ToDoHeader";
import ToDoList from "./ToDoList";
import ToDoFilters from './ToDoFilters';
import './index.css'
class App extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <section className="todoapp">
                <ToDoHeader/>
                <ToDoList state = {this.props.state}/>
                <ToDoFilters/>
            </section>
        );
    }

}
export default App;