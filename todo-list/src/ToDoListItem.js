import React from 'react';
import store from '../store/store';
import {deleteItem} from "../store/actionCreators/actionCreators"
import {connect} from "react-redux";
import mapToDispatchProps from "../store/mapToDispatchProps";


class ToDoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.checkRef = React.createRef();
        this.liRef = React.createRef();
        this.setCompleted = this.setCompleted.bind(this);
        this.delete = this.delete.bind(this);
      
        
    }
    setCompleted(){
       
        if(this.checkRef.current.checked){
            this.liRef.current.classList.toggle('completed')
            this.props.completeTodo();
        }
        else{
            this.liRef.current.classList.toggle('completed')
            this.props.completeTodo();
        }
        console.log(this.props);

    }
    delete(e){
        // store.dispatch(deleteItem(Number(e.target.getAttribute('index'))));
        this.props.deleteItem(Number(e.target.getAttribute("index")));
    }
    render() {
        return (
            <li ref = {this.liRef}>
                <div className="view">
                    <input className="toggle" type="checkbox" ref={this.checkRef} onClick={this.setCompleted}/>
                    <label>{this.props.text}</label>
                    <button className="destroy" index={this.props.index} onClick={this.delete}></button>
                </div>
                <input className="edit" value="Create a TodoMVC template" />
            </li>
        );
    }


}
const TODOLISTITEM = connect(null, mapToDispatchProps('ToDoListItem'))(ToDoListItem)
export default TODOLISTITEM;