import React, {useEffect, useState} from 'react';
import store from './store/store';
import mapToStateProps from './store/maptoStateProps';
import {useHistory} from "react-router-dom";
import mapToDispatchProps from './store/mapToDispatchProps';
import {connect} from 'react-redux';
import {useDispatch} from "react-redux";
import socket from "../sockets";

function ToDoHeader ({addNew})  {
    let dispatch = useDispatch();
    let [text, setText] = useState("");
    const history = useHistory();

    useEffect(function (){
        socket.emit("setData",text);
    },[text])

    socket.on('getData',(data)=>{
        setText(data);
    })
   let KeyDown = (e) => {
        if (e.keyCode === 13  && text) {
            dispatch(addNew(text));
           setText("");
           history.push("/addNew");

        }
        else if(e.keyCode === 13  && !text) alert("empty Todo");
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
