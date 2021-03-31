import React, {useEffect, useState} from 'react';
import {Grid, Button, FormControl, InputLabel, Input} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import InputComponent from "./InputComponent";
import {useHistory} from "react-router-dom";
import {LOGIN_AUTH, REGISTER, REGISTER_NEW_USER} from "../../redux/actions/actions";

function RegistrationComponent(){
    let dispatch = useDispatch();
    let register = useSelector(state => state.registration.register);
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("");
    let [name,setName] = useState("")
    let history = useHistory();
    useEffect(()=>{
        if(register){
            dispatch({type:LOGIN_AUTH,payload:true})
            history.push("/main");
        }
    },[register])

    let onSubmit =(e)=>{
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
                        <Input type={"text"} id={"nameInput"} value={name} onChange={(e)=>{setName(e.target.value)}}  required placeholder={"Type your name"}/>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl size="medium">
                        <InputLabel htmlFor={"emailInput"}>Email</InputLabel>
                        <Input type={"email"} id={"emailInput"} value={email} onChange={(e)=>{setEmail(e.target.value)}}  required placeholder={"Type your email"}/>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl size="medium">
                        <InputLabel htmlFor={"passwordInput"}>Password</InputLabel>
                        <Input type={"password"} id={"passwordInput"} value={password} onChange={(e)=>{setPassword(e.target.value)}}  required placeholder={"Type your password"}/>
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