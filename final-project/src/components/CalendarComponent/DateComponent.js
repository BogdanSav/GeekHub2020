import React, {useState} from "react";
import {Typography ,Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_DAY} from "../../redux/actions/actions";

const style = makeStyles({
    typography:{
        fontSize: "32px",
        '&:hover':{
            cursor: "pointer"
        }
    }
})
function DateComponent({day}){
    let count =useSelector(state => state.actions);
    let currDay = useSelector(state => state.calendar.currentDay);
    const dispatch = useDispatch();
    const classes = style();
    return(
            <Typography className={classes.typography} variant="body1"  onClick={()=>{dispatch({type:CHANGE_DAY,payload:Number(day)})}}>
                {
                    count.length!==0&& day==currDay ? day + `(${count.length})`:day
                }
            </Typography>
    );
}
export default DateComponent;