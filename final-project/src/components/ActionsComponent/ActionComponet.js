import React from "react";
import {CircularProgress, Grid, Typography} from "@material-ui/core";
import SingleAction from "./SingleAction";
import {useSelector} from "react-redux";

function ActionComponent() {
    const values = useSelector(state => state.actions);
    if (!values) {
        return (<CircularProgress/>)
    }

    return (
        <Grid container direction={"column"} justify={"space-around"} alignItems={"center"}>
            {values.length === 0 ? <Grid item><Typography>nothing to see here</Typography></Grid> :
                values.map((val, index) => (
                    <Grid key={index} item>
                        <SingleAction key={index} value={val.text} index={index} time={val.time}/>
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default ActionComponent;