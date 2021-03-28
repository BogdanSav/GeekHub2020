import React, {useState} from "react";
import {Typography ,Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
const style = makeStyles({
    typography:{
        fontSize: "32px",
        '&:hover':{
            cursor: "pointer"
        }
    }
})
function DateComponent({day}){
    const classes = style();
    return(
            <Typography className={classes.typography} variant="body1"  onClick={()=>{console.log(day)}}>{day}</Typography>
    );
}
export default DateComponent;