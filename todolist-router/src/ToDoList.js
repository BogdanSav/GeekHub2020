import React from 'react';
import ToDoListItem from './ToDoListItem'
import { connect } from "react-redux";
import mapToStateProps from "./store/maptoStateProps";
import mapToDispatchProps from "./store/mapToDispatchProps";
import { useLocation,useParams } from "react-router-dom";
import { useEffect } from 'react';


function ToDoList({ value, setFilter  }) {
    const {id} = useParams()
    const stand = value.map((text, index) => (
        <ToDoListItem text={text.text} index={index} key={index} />
    ));
    const oneItem = stand.filter((item,index)=>Number(id)===index+1);
    
    // let location = useLocation();

    // useEffect(() => {
    //     console.log(location.pathname)

    //     switch (location.pathname) {
    //         case "/": { setFilter("ALL"); }
    //         case "/active": { setFilter("ACTIVE"); }
    //         case "/completed": { setFilter("COMPLETED"); }
    //         default: setFilter("ALL");
    //     }
    // }, [location])

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
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
