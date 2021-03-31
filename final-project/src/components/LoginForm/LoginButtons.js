import React from 'react';
import { Grid,Button,Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
function LoginButtons() {
    return (
        <Grid container direction={'column'} justify="space-around" alignItems="center" spacing={3}>
            <Grid item>
                <Button type={"submit"}  variant="outlined" color="primary" >Login</Button>
            </Grid>
            <Grid item>
                <Typography variant="body1">Have no account? { <Link to={"/registration"} >Register</Link>}  new one</Typography>
            </Grid>
        </Grid>
    );
}

export default LoginButtons;