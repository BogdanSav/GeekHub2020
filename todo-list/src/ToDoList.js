import React from 'react';
import TODOLISTITEM from './ToDoListItem'
import {connect} from "react-redux";
import mapToStateProps from "../store/maptoStateProps";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.item;


    }
    render() {
        console.log(this.props)
        return (
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {
                        this.item = this.props.value.map((text, index)=>(
                            <TODOLISTITEM text={text} index={index}/>
                        ))
                    }
                </ul>
            </section>
        );
    }
}

const TODOLIST = connect(mapToStateProps,null)(ToDoList)
export default TODOLIST;