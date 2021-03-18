import React, {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import mapToDispatchProps from "./store/mapToDispatchProps";
import maptoStateProps from "./store/maptoStateProps";
import classnames from 'classnames'
import {useHistory} from "react-router-dom";


function ToDoListItem({_deleteItems, index, completeTodo, text}) {
    let dispatch = useDispatch()
    let [checked, setCheck] = useState(false);
    let history = useHistory();
    let checkComplete = useSelector(state=>state.asyncList)
    useEffect(()=>{
        if(checkComplete[index].completed){
            setCheck(true);
        }
    },[])
    let setCompleted = () => {
       dispatch(completeTodo(index));
       setCheck(!checked);
       history.push("setComplete");
    }
    let _deleteItem= (e)=>
    {setCheck(false)
        dispatch(completeTodo(index))
       dispatch( _deleteItems(Number(index)));
        history.push("delete");

    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(!this.props.state[this.props.index].completed){
    //         this.liRef.current.classList.remove('completed');
    //         this.checkRef.current.checked = false;
    //     }
    //     else {
    //         this.liRef.current.classList.add('completed');
    //         this.checkRef.current.checked = true;
    //     }
    // }



        return (
            <li className={classnames({completed: checked})}>
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={setCompleted} checked={checked} readOnly={true}/>
                    <label>{text}</label>
                    <button className="destroy" onClick={_deleteItem}></button>
                </div>
                <input className="edit" value="Create a TodoMVC template"/>
            </li>
        );

}

export default connect(maptoStateProps("ToDoListItem"), mapToDispatchProps('ToDoListItem'))(ToDoListItem)
