import React from 'react';
import { Container, Grid } from "@material-ui/core";
import RegistrationTitle from "./RegistrationTitle";
import RegistrationComponent from "./RegistrationComponent"
function RegistrationForm() {
    return (
        <Container maxWidth="sm" style={{ marginTop: "50px" }}>
            <Grid container direction="column" justify="space-around" alignItems="center" spacing={5}>
                <Grid item><RegistrationTitle /></Grid>
                <Grid item><RegistrationComponent /></Grid>
            </Grid>
        </Container>
    );
}

export default RegistrationForm;