import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Button, Grid, IconButton, Input, Typography} from "@material-ui/core";

function SwitchDay() {
    return (
        <Grid container direction={"column"} alignItems={"center"}>
            <Grid item><IconButton component={"span"}>
                <ArrowBackIosIcon/>
            </IconButton>
                <Typography component={"span"}>Day</Typography>
                <IconButton component={"span"}>
                    <ArrowForwardIosIcon/>
                </IconButton></Grid>
            <Grid item>
                <Input/>
                <Button>Add</Button>
            </Grid>
        </Grid>
    )
        ;
}

export default SwitchDay