import React from 'react';
import {connect} from "react-redux";
import mapToDispatchProps from "../store/mapToDispatchProps";
import maptoStateProps from "../store/maptoStateProps";
import classnames from 'classnames'


class FilterLink extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <a className={classnames({selected: this.props.active})} onClick={this.props.setFilter}>{this.props.text}</a>
        );
    }
}
export default connect(maptoStateProps('FilterLink'),mapToDispatchProps('FilterLink'))(FilterLink);