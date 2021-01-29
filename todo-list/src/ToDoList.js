import React from 'react';
import ToDoListItem from './ToDoListItem'
import {connect} from "react-redux";
import mapToStateProps from "../store/maptoStateProps";
import mapToDispatchProps from "../store/mapToDispatchProps";


class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.item = undefined;
        this.onChange = this.onChange.bind(this);
    }
    onChange(){
        this.props.completeAll();
    }

    render() {
        console.log(this.props)
        return (
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {
                        this.item = this.props.value.map((text, index) => (
                            <ToDoListItem text={text.text} index={index}/>
                        ))
                    }
                </ul>
            </section>
        );
    }
}
export default connect(mapToStateProps('ToDoList'),mapToDispatchProps('ToDoList'))(ToDoList)
