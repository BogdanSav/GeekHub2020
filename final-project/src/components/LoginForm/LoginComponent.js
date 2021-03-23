import React from 'react';
import { FormControl, InputLabel, Input, Grid,Button, Typography } from "@material-ui/core";
import LoginButtons from "./LoginButtons"
function LoginComponent() {
    return (
        <form>
            <Grid container direction="column" justify="space-between" alignItems="center" spacing={4} >
                <Grid item >
                    <FormControl size="medium">
                        <InputLabel htmlFor="emailInput">Email</InputLabel>
                        <Input type="email" id="emailInput"  placeholder="Type your Email" required/>
                    </FormControl>
                </Grid>
                <Grid item> 
                    <FormControl size="medium">
                        <InputLabel htmlFor="passwordInput">Password</InputLabel>
                        <Input type="password" id="passwordInput" required />
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