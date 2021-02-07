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
import {createBrowserHistory} from "history";

const history = createBrowserHistory()

class App extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Router >
                
                <section className="todoapp">
                <ToDoHeader/>
                    <Switch>
                        <Route exact path="/">
                    
                            <ToDoList/>
            
                        </Route>
                        <Route  path="/active">
                            
                           <ToDoList/>
                           
                        </Route>
                        <Route path="/completed">
                            
                            <ToDoList/>
                            
                        </Route>
                    </Switch>
                    <ToDoFilters/>
                </section>
            </Router>

        );
    }

}

export default App;