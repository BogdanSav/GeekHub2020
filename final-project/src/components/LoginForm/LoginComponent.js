import React from 'react';
import { Grid } from "@material-ui/core";
import InputComponent from "./InputComponent";
import LoginButtons from "./LoginButtons"
function LoginComponent() {
    return (
        <form>
            <Grid container direction="column" justify="space-between" alignItems="center" spacing={4} >
               <InputComponent id={"emailInput"} type={"email"} holder={"type your email"}  text={"Email"}/>
               <InputComponent id={"passwordInput"} type={"password"} text={"Password"}/>
                <Grid item>
                    <LoginButtons/>
                </Grid>
              
            </Grid>
            
        </form>
    );
}

export default LoginComponent;