import React from 'react';
import {connect} from "react-redux";
import mapToDispatchProps from "./store/mapToDispatchProps";
import maptoStateProps from "./store/maptoStateProps";
import classnames from 'classnames'
import {Link} from "react-router-dom";


class FilterLink extends React.Component{
    constructor(props) {
        super(props);
        this.setFilter = this.setFilter.bind(this);
    }
    setFilter(){
        this.props.setFilter(this.props.filter);
    }
    render() {
        return(
            <Link to={this.props.linkTo} className={classnames({selected: this.props.active})} onClick={this.setFilter}>{this.props.text}</Link>
        );
    }
}
export default connect(maptoStateProps('FilterLink'),mapToDispatchProps('FilterLink'))(FilterLink);