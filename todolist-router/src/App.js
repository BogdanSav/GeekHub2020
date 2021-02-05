import React from 'react';

import ToDoHeader from "./ToDoHeader";
import ToDoList from "./ToDoList";
import ToDoFilters from './ToDoFilters';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useLocation,
} from "react-router-dom";

import './index.css'

class App extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Router>

                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/active">Active</Link>
                    </li>
                    <li>
                        <Link to="/completed">Completed</Link>
                    </li>
                </ul>

                <section className="todoapp">
                    <ToDoHeader/>
                    <Switch>
                        <Route exact path="/">
                            <ToDoList filter="ALL"/>
                        </Route>
                        <Route path="/active">
                            <ToDoList filter="ACTIVE"/>
                        </Route>
                        <Route path="#/completed">
                            <ToDoList filter="COMPLETED"/>
                        </Route>
                    </Switch>
                    <ToDoFilters/>
                </section>
            </Router>

        );
    }

}

export default App;