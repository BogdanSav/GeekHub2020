import React from 'react';
import store from './store/store';
// import {addItem} from '../store/actionCreators/actionCreators';
import mapToStateProps from './store/maptoStateProps';
import mapToDispatchProps from './store/mapToDispatchProps';
// import postItems from "./store/actionCreators/actionCreators"
import {connect} from 'react-redux';
import {useDispatch} from "react-redux";

function ToDoHeader ({addNew})  {
    let dispatch = useDispatch();
   let KeyDown = (e) => {
        if (e.keyCode === 13 && e.target.value) {
          dispatch(addNew(e.target.value));
           e.target.value = ""
        }
    }

        return (
            <header className="header">
            <h1> todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} onKeyDown={KeyDown}/>
            </header>
        );

}
export default connect(null,mapToDispatchProps('ToDoHeader'))(ToDoHeader);
