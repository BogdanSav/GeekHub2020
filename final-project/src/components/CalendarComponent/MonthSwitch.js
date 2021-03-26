import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {IconButton, Typography} from "@material-ui/core";

function MonthSwitch() {
    return (
        <React.Fragment>
            <IconButton component={"span"}>
                <ArrowBackIosIcon fontSize={"large"}/>
            </IconButton>
            <Typography component={"span"} variant={"h3"}>Month</Typography>
            <IconButton component={"span"}>
                <ArrowForwardIosIcon fontSize={"large"}/>
            </IconButton>
        </React.Fragment>


    );
}

export default MonthSwitch