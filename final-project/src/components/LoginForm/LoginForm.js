import React from 'react';
import { Container, Grid } from "@material-ui/core";
import LoginComponent from "./LoginComponent"
import LoginTitle from "./LoginTitle"
function LoginForm() {
    return (
        <Container maxWidth="sm" style={{marginTop: "50px"}}>
            <Grid container direction="column" justify="space-around" alignItems="center" spacing={5}>
                <Grid item><LoginTitle /></Grid>
                <Grid item><LoginComponent /></Grid>
            </Grid>
        </Container>
    );
}

export default LoginForm;