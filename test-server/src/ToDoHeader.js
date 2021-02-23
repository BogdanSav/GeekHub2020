import React, {useEffect, useState} from 'react';
import store from './store/store';
// import {addItem} from '../store/actionCreators/actionCreators';
import mapToStateProps from './store/maptoStateProps';
import mapToDispatchProps from './store/mapToDispatchProps';
// import postItems from "./store/actionCreators/actionCreators"
import {connect} from 'react-redux';
import {useDispatch} from "react-redux";
import io from "socket.io-client"

function ToDoHeader ({addNew})  {
    let socket;

    useEffect(()=>{
        socket =io("http://localhost:8000");
    },[])
    let [text, setText] = useState("");
    let dispatch = useDispatch();
   let KeyDown = (e) => {
        if (e.keyCode === 13 && e.target.value) {
          dispatch(addNew(e.target.value));
           e.target.value = ""
        }
    }
    let change =(e)=>{
       setText(e.target.value)
       socket.emit('setData',e.target.value);
       socket.on("getData", data=>{
           setText(data);
       })
    }
    console.log(text);

        return (
            <header className="header">
            <h1> todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} onKeyDown={KeyDown} onChange={e=>change(e)} value={text}/>
            </header>
        );

}
export default connect(null,mapToDispatchProps('ToDoHeader'))(ToDoHeader);
