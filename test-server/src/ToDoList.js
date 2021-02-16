import React from 'react';
import ToDoListItem from './ToDoListItem'
import {connect} from "react-redux";
import mapToStateProps from "./store/maptoStateProps";
import mapToDispatchProps from "./store/mapToDispatchProps";
import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import {useDispatch ,useSelector} from 'react-redux'
import {getItems} from "./store/actionCreators/actionCreators";


function ToDoList({value}) {
    let dispatch = useDispatch();
    let items  = useSelector(state=>state.asyncList);

    useEffect(() => {
         dispatch(getItems([]));
    }, [])

    const {id} = useParams()
    const stand = items.map((text, index) => (
        <ToDoListItem text={text.text} index={index} key={index}/>
    ));
    const oneItem = stand.filter((item, index) => Number(id) === index + 1);


        return (

            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {
                        id ? oneItem : stand
                    }
                </ul>
            </section>
        );

}

export default connect(mapToStateProps('ToDoList'), mapToDispatchProps('ToDoList'))(ToDoList);
