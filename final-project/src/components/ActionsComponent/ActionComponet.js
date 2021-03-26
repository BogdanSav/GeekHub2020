import React from "react";
import {Grid} from "@material-ui/core";
import SingleAction from "./SingleAction";
function ActionComponent(){
    const values = ["first", "second"];
    return(
        <Grid container direction={"column"} justify={"space-around"} alignItems={"center"}>
            {values.map(val=>(
                <Grid item>
                    <SingleAction value={val}/>
                </Grid>
            ))}
        </Grid>
    );
}
export default ActionComponent;