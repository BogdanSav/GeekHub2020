import React, {useCallback, useEffect, useState} from 'react';
import {FormControl, Grid, Input, InputLabel} from "@material-ui/core";
import LoginButtons from "./LoginButtons"
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {LOGGING_DATA} from "../../redux/actions/actions";


function LoginComponent() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.login.auth);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();
    useEffect(() => {
        if (state) {
            history.push("/main");
        }
    }, [state])
    const onSubmit = (event) => {
        event.preventDefault();
        if (email && password) {
            dispatch({type: LOGGING_DATA, payload: {email, password}})
            setPassword("")
            setEmail("")
        }
    }
    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value);
    }, [email])
    const handlePasswordChange = useCallback((e) => {
        setPassword(e.target.value);
    }, [password])

    return (
        <form onSubmit={onSubmit}>
            <Grid container direction="column" justify="space-between" alignItems="center" spacing={4}>
                <Grid item>
                    <FormControl size="medium">
                        <InputLabel htmlFor={"emailInput"}>Email</InputLabel>
                        <Input type={"email"} id={"emailInput"} value={email} onChange={handleEmailChange} required
                               placeholder={"Type your email"}/>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl size="medium">
                        <InputLabel htmlFor={"passwordInput"}>Password</InputLabel>
                        <Input type={"password"} id={"passwordInput"} value={password} onChange={handlePasswordChange}
                               required placeholder={"Type your password"}/>
                    </FormControl>
                </Grid>
                <Grid item>
                    <LoginButtons/>
                </Grid>

            </Grid>

        </form>
    );
}

export default LoginComponent;