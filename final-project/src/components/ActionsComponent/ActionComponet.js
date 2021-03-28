import React from "react";
import {Grid} from "@material-ui/core";
import SingleAction from "./SingleAction";
import {useSelector} from "react-redux";
function ActionComponent(){
    const values = useSelector(state => state.actions);
    return(
        <Grid container direction={"column"} justify={"space-around"} alignItems={"center"}>
            {values.map((val,index)=>(
                <Grid key={index} item>
                    <SingleAction key={index} value={val.text} index={index} time={val.time}/>
                </Grid>
            ))}
        </Grid>
    );
}
export default ActionComponent;