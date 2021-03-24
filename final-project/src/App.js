import React from 'react';
import FromContainer from "./components/LoginForm/FromContainer"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/LoginForm/RegistrationForm";
import CalendarTable from "./components/CalendarComponent/CalendarTable";
function App() {
    return (
    <Router>
        <Switch>
            <Route exact path={"/login"}>
                <LoginForm/>
            </Route>
            <Route exact path={"/registration"}>
                <RegistrationForm/>
            </Route>
            <Route exact path={"/main"}>
                <CalendarTable/>
            </Route>
        </Switch>

    </Router>


    );
}

export default App;