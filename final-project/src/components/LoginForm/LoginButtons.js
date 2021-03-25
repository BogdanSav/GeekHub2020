import React from 'react';
import {LOGGING_IN} from "../../redux/actions/actions";
import {useDispatch} from "react-redux";
import { Grid,Button,Typography} from "@material-ui/core"
import {Link ,useHistory} from "react-router-dom"
function LoginButtons() {
    let dispatch = useDispatch();

    let login =()=>{
        dispatch({type:LOGGING_IN,payload:true});
    }
    return (
        <Grid container justify="space-around" alignItems="center" spacing={3}>
            <Grid item>
                <Button  variant="outlined" color="primary" onClick={()=>{login()}}>Login</Button>
            </Grid>
            <Grid item>
                <Typography variant="h6"> OR</Typography>
            </Grid>
            <Grid item>
                <Link to={"/registration"} ><Button variant={"outlined"} color="primary">Register</Button></Link>
            </Grid>
        </Grid>
    );
}

export default LoginButtons;