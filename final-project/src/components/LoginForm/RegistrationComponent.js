import React, {useCallback, useEffect, useState} from 'react';
import {Grid, Button, FormControl, InputLabel, Input} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import {useHistory} from "react-router-dom";
import {LOGIN_AUTH, REGISTER_NEW_USER} from "../../redux/actions/actions";

function RegistrationComponent(){
    const dispatch = useDispatch();
    const register = useSelector(state => state.registration.register);
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const [name,setName] = useState("")
    const history = useHistory();
    useEffect(()=>{
        if(register){
            dispatch({type:LOGIN_AUTH,payload:true})
            history.push("/main");
        }
    },[register])
    const handleNameChange = useCallback((e)=>{
        setName(e.target.value)
    },[name])
    const handleEmailChange = useCallback((e)=>{
        setEmail(e.target.value)
    },[email])
    const handlePasswordChange = useCallback((e)=>{
        setPassword(e.target.value)
    },[password])

    const onSubmit =(e)=>{
        e.preventDefault();
        dispatch({type:REGISTER_NEW_USER,payload:{ name, email, password}});
        setName("");
        setPassword("");
        setEmail("");
    }
    return (
    <form onSubmit={onSubmit}>
            <Grid container direction="column" justify="space-between" alignItems="center" spacing={4} >
                <Grid item>
                    <FormControl size="medium">
                        <InputLabel htmlFor={"nameInput"}>Name</InputLabel>
                        <Input type={"text"} id={"nameInput"} value={name} onChange={handleNameChange}  required placeholder={"Type your name"}/>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl size="medium">
                        <InputLabel htmlFor={"emailInput"}>Email</InputLabel>
                        <Input type={"email"} id={"emailInput"} value={email} onChange={handleEmailChange}  required placeholder={"Type your email"}/>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl size="medium">
                        <InputLabel htmlFor={"passwordInput"}>Password</InputLabel>
                        <Input type={"password"} id={"passwordInput"} value={password} onChange={handlePasswordChange}  required placeholder={"Type your password"}/>
                    </FormControl>
                </Grid>
                <Grid item>
                  <Button type={"submit"} color={"primary"} variant={"outlined"}>Register now</Button>
                </Grid>
            </Grid>
            
        </form>
   );
}

export default RegistrationComponent;