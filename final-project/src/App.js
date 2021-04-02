import React, {useEffect} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch,} from "react-router-dom";
import {useSelector} from "react-redux";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/LoginForm/RegistrationForm";
import MainContainer from "./components/Main/MainContainer";

function App() {

    let loggedIn = useSelector(state => state.login.auth);
    let register = useSelector(state => state.registration.register);

    return (
        <Router>
            <Switch>
                <Route exact path={"/"}>
                    <Redirect to={"/login"}/>
                </Route>
                <Route exact path={"/login"}>
                    <LoginForm/>
                </Route>
                <Route exact path={"/registration"}>
                    <RegistrationForm/>
                </Route>
                <Route exact path={"/main"}>
                    {loggedIn || register ? <MainContainer/> : <Redirect to={"/login"}/>}
                </Route>
            </Switch>

        </Router>


    );
}

export default App;