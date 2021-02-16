import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import mapToDispatchProps from "./store/mapToDispatchProps";
import maptoStateProps from "./store/maptoStateProps";


function ToDoListItem({_deleteItems, index, completeTodo, text}) {
    let dispatch = useDispatch()
    let checkRef = React.createRef();
    let liRef = React.createRef();
    let checkComplete = useSelector(state=>state.asyncList)
    useEffect(()=>{
        if(checkComplete[index].completed){
            liRef.current.classList.toggle('completed');
            checkRef.current.checked = true;
        }
    },[])
    let setCompleted = () => {
       dispatch(completeTodo(index));
        liRef.current.classList.toggle('completed');
        console.log(liRef)
    }
    let _deleteItem= (e)=>
    {
       dispatch( _deleteItems(Number(index)));
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
            <li ref={liRef}>
                <div className="view">
                    <input className="toggle" type="checkbox" ref={checkRef} onClick={setCompleted}/>
                    <label>{text}</label>
                    <button className="destroy" onClick={_deleteItem}></button>
                </div>
                <input className="edit" value="Create a TodoMVC template"/>
            </li>
        );

}

export default connect(maptoStateProps("ToDoListItem"), mapToDispatchProps('ToDoListItem'))(ToDoListItem)
