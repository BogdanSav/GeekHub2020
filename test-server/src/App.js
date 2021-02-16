import React, {useState} from 'react';

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
import {createBrowserHistory} from "history";



const history = createBrowserHistory()

function App() {
    let [id, setID] = useState();

    let onChange = (e) => {
        setID(e.target.value);
    }

        return (
            <Router>
                <ul>
                    <li>
                        <input type="text" onChange={onChange}/>
                    </li>
                    <li>
                        <Link to={"/todo/" + id}> todo</Link>
                    </li>
                    <li>

                    </li>
                </ul>
                <section className="todoapp">
                    <ToDoHeader/>
                    <Switch>
                        <Route exact path="/">
                            <ToDoList/>
                        </Route>
                        <Route path="/active">
                            <ToDoList/>
                        </Route>
                        <Route path="/completed">
                            <ToDoList/>
                        </Route>
                        <Route path="/todo/:id">
                            <ToDoList/>
                        </Route>
                    </Switch>
                    <ToDoFilters/>
                </section>
            </Router>

        );


}

export default App;