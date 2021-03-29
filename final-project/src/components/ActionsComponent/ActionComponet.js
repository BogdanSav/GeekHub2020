import React from "react";
import {Grid, Typography ,CircularProgress} from "@material-ui/core";
import SingleAction from "./SingleAction";
import {useSelector} from "react-redux";

function ActionComponent(){
    const values = useSelector(state => state.actions);
    console.log(values);
    if (!values){
        return (<CircularProgress/>)
    }
    return(
        <Grid container direction={"column"} justify={"space-around"} alignItems={"center"}>
            {typeof values =="string" ? <Grid item><Typography>{values}</Typography></Grid> :
                values.map((val,index)=>(
                <Grid key={index} item>
                    <SingleAction key={index} value={val.text} index={index} time={val.time}/>
                </Grid>
            ))
            }
        </Grid>
    );
}
export default ActionComponent;