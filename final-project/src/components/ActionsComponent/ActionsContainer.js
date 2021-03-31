import React, {useEffect} from "react";
import ActionsTitle from "./ActionsTitle";
import ActionComponent from "./ActionComponet";
import SwitchDay from "./SwitchDay";
import {useDispatch} from "react-redux";
import {GET_USER_DATA} from "../../redux/actions/actions";
import {Grid} from "@material-ui/core";
function ActionsContainer(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch({type:GET_USER_DATA,payload:[]});
    })
    return(
        <React.Fragment>
            <Grid container direction={"column"} justify={"space-around"} alignItems={"center"}>
                <Grid item>
                    <ActionsTitle/>
                </Grid>
                <Grid item>
                    <SwitchDay/>
                </Grid>
                <Grid item>
                    <ActionComponent/>
                </Grid>
            </Grid>



        </React.Fragment>
    );
}
export default ActionsContainer