import React from 'react';
import {REGISTER} from "../../redux/actions/actions";
import {useDispatch} from "react-redux";
import { Grid,Button,Typography,Link } from "@material-ui/core"
function LoginButtons() {
    let dispatch = useDispatch();
    return (
        <Grid container justify="space-around" alignItems="center" spacing={3}>
            <Grid item>
                <Button type="submit" variant="outlined" color="primary">Login</Button>
            </Grid>
            <Grid item>
                <Typography variant="h6"> OR</Typography>
            </Grid>
            <Grid item>
                <Link href={"/registration"} ><Button variant={"outlined"} color="primary">Register</Button></Link>
            </Grid>
        </Grid>
    );
}

export default LoginButtons;