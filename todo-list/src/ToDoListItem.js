import React from 'react';
import {connect} from "react-redux";
import mapToDispatchProps from "../store/mapToDispatchProps";
import maptoStateProps from "../store/maptoStateProps";


class ToDoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.checkRef = React.createRef();
        this.liRef = React.createRef();
        this.setCompleted = this.setCompleted.bind(this);
        this.delete = this.delete.bind(this);


    }

    setCompleted() {
        this.props.completeTodo(this.props.index);
        if (this.props.completed) {
            this.liRef.current.classList.add('completed');

        } else {
            this.liRef.current.classList.remove('completed');
        }
        console.log(this.props);

    }

    delete(e) {
        // store.dispatch(deleteItem(Number(e.target.getAttribute('index'))));
        this.props.deleteItem(Number(this.props.index));
    }

    render() {
        return (
            <li ref={this.liRef}>
                <div className="view">
                    <input className="toggle" type="checkbox" ref={this.checkRef} onClick={this.setCompleted}/>
                    <label>{this.props.text}</label>
                    <button className="destroy"  onClick={this.delete}> </button>
                </div>
                <input className="edit" value="Create a TodoMVC template"/>
            </li>
        );
    }


}

 export default connect(maptoStateProps("ToDoListItem"), mapToDispatchProps('ToDoListItem'))(ToDoListItem)
