import React from 'react';
import maptoStateProps from "./store/maptoStateProps";
import mapToDispatchProps from "./store/mapToDispatchProps";
import {connect, useDispatch} from "react-redux";
import FilterLink from "./FilterLink";

function ToDoFilters({clear,count}) {
    	let dispatch = useDispatch();
		let counter = count.filter(item=>!item.completed);
		let clearItems=()=>{
			dispatch(clear());
		}
        return(
            <footer className="footer">
				<span className="todo-count"><strong>{counter.length}</strong> item left</span>
				<ul className="filters">
					<li>
						<FilterLink linkTo="/" text="All"  filter="ALL"/>
					</li>
					<li>
						<FilterLink linkTo="/active"  text="Active" filter="ACTIVE"/>
					</li>
					<li>
						<FilterLink linkTo="/completed"  text="Completed" filter="COMPLETED"/>
					</li>
				</ul>
				<button className="clear-completed" onClick={clearItems}>Clear completed</button>
			</footer>
        );

}
export default connect(maptoStateProps('ToDoFilters'),mapToDispatchProps('ToDoFilters'))(ToDoFilters);