import React from 'react';

import ToDoHeader from "./ToDoHeader";
import ToDoList from "./ToDoList";
import ToDoFilters from './ToDoFilters';
import ToDoListItem from './ToDoListItem'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useLocation,
} from "react-router-dom";

import './index.css'
import { createBrowserHistory } from "history";

const history = createBrowserHistory()

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: ""
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {

        this.setState({ id: e.target.value });

    }

    render() {
        return (
            <Router >
                <ul>
                    <li>
                        <input type="text" onChange={this.onChange} />
                    </li>
                    <li>
                        <Link to={"/todo/" + this.state.id}>  todo</Link>
                    </li>
                    <li>

                    </li>
                </ul>
                <section className="todoapp">
                    <ToDoHeader />
                    <Switch>
                        <Route exact path="/">
                            <ToDoList />
                        </Route>
                        <Route path="/active">
                            <ToDoList />
                        </Route>
                        <Route path="/completed">
                            <ToDoList />
                        </Route>
                        <Route path="/todo/:id">
                            <ToDoList />
                        </Route>
                    </Switch>
                    <ToDoFilters />
                </section>
            </Router>

        );
    }

}

export default App;