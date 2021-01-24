import React from 'react';
import ToDoListItem from './ToDoListItem'

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.item;
    }
    render() {
       
        return (
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {
                        this.item = this.props.state.map((text, index)=>(
                            <ToDoListItem text={text} index={index}/>
                        ))
                    }
                </ul>
            </section>
        );
    }
}

export default ToDoList;