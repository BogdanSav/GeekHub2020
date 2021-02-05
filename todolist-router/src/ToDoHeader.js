import React from 'react';
import store from './store/store';
// import {addItem} from '../store/actionCreators/actionCreators';
import mapToStateProps from './store/maptoStateProps';
import mapToDispatchProps from './store/mapToDispatchProps';
import {connect} from 'react-redux';
class ToDoHeader extends React.Component {
    constructor(props) {
        super(props);
        this.KeyDown = this.KeyDown.bind(this);

    }

    KeyDown(e) {
        if (e.keyCode === 13 && e.target.value) {
           this.props.addItem(e.target.value);
           e.target.value = ""
        }
    }
    render() {
        return (
            <header className="header">
            <h1> todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} onKeyDown={this.KeyDown}/>
            </header>
        );
    }
}
export default connect(null,mapToDispatchProps('ToDoHeader'))(ToDoHeader);
