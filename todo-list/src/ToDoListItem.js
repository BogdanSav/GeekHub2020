import React from 'react';
import store from '../store/store';
import {deleteItem} from "../store/actionCreators/actionCreators"


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
        }
        else{
            this.liRef.current.classList.toggle('completed')
        }
    }
    delete(e){
        store.dispatch(deleteItem(Number(e.target.getAttribute('index'))));
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
export default ToDoListItem;