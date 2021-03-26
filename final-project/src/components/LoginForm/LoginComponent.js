import React, {useEffect, useState} from 'react';
import { Grid } from "@material-ui/core";
import InputComponent from "./InputComponent";
import LoginButtons from "./LoginButtons"
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
function LoginComponent() {
    let state =useSelector(state => state.login.auth);
    let history =useHistory();
    useEffect(()=>{
        if(state){
            history.push("/main");
        }

    })
    let onSubmit =(event)=>{
        event.preventDefault();

    }
    return (
        <form>
            <Grid container direction="column" justify="space-between" alignItems="center" spacing={4}  >
               <InputComponent id={"emailInput"} type={"email"} holder={"type your email"}  text={"Email"} />
               <InputComponent id={"passwordInput"} type={"password"} text={"Password"}/>
                <Grid item>
                    <LoginButtons/>
                </Grid>
              
            </Grid>
            
        </form>
    );
}

export default LoginComponent;