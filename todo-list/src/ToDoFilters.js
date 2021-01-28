import React from 'react';
import maptoStateProps from "../store/maptoStateProps";
import mapToDispatchProps from "../store/mapToDispatchProps";
import {connect} from "react-redux";
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
						<a className="selected" onClick={this.props.All}>All</a>
					</li>
					<li>
						<a onClick={this.props.Active}>Active</a>
					</li>
					<li>
						<a onClick={this.props.Completed}>Completed</a>
					</li>
				</ul>
				<button className="clear-completed" onClick={this.props.clear}>Clear completed</button>
			</footer>
        );
    }
}
export default connect(maptoStateProps('ToDoFilters'),mapToDispatchProps('ToDoFilters'))(ToDoFilters);