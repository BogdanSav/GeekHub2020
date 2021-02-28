import React, {useEffect, useState} from 'react';
import store from './store/store';
// import {addItem} from '../store/actionCreators/actionCreators';
import mapToStateProps from './store/maptoStateProps';
import mapToDispatchProps from './store/mapToDispatchProps';
// import postItems from "./store/actionCreators/actionCreators"
import {connect} from 'react-redux';
import {useDispatch} from "react-redux";
import socket from "../sockets";
import {SOCKET_EVENT} from "./store/actions/actions";

function ToDoHeader ({addNew})  {
    let dispatch = useDispatch();

    let [text, setText] = useState("");
    useEffect(function (){
        socket.emit("setData",text);
    },[text])

    socket.on('getData',(data)=>{
        setText(data);
    })
   let KeyDown = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            dispatch(addNew(e.target.value));
           e.target.value = ""
        }
    }
    socket.on('modified',()=>{
        setText("")
    })


        return (
            <header className="header">
            <h1> todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} onKeyDown={KeyDown} onChange={e=> setText(e.target.value)} value={text}/>
            </header>
        );

}
export default connect(null,mapToDispatchProps('ToDoHeader'))(ToDoHeader);
