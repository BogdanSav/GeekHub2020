import React from 'react';
import maptoStateProps from "../store/maptoStateProps";
import mapToDispatchProps from "../store/mapToDispatchProps";
import {connect} from "react-redux";
import FilterLink from "./FilterLink";
class ToDoFilters extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
		this.conut = this.props.count.filter(item=>!item.completed);
        return(
            <footer className="footer">
				<span className="todo-count"><strong>{this.conut.length}</strong> item left</span>
				<ul className="filters">
					<li>
						<FilterLink text="All" filter="ALL"/>
					</li>
					<li>
						<FilterLink text="Active" filter="ACTIVE"/>
					</li>
					<li>
						<FilterLink text="Completed" filter="COMPLETED"/>
					</li>
				</ul>
				<button className="clear-completed" onClick={this.props.clear}>Clear completed</button>
			</footer>
        );
    }
}
export default connect(maptoStateProps('ToDoFilters'),mapToDispatchProps('ToDoFilters'))(ToDoFilters);