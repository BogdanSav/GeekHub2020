import React from 'react';
import store from '../store/store';
import {addItem} from '../store/actionCreators/actionCreators';

class ToDoHeader extends React.Component {
    constructor(props) {
        super(props);
        this.KeyDown = this.KeyDown.bind(this);

    }
    KeyDown(e) {
        if (e.keyCode === 13) {
            store.dispatch(addItem(e.target.value));
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
export default ToDoHeader;