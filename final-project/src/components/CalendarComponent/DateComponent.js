import React, {useEffect, useState} from "react";
import {Typography ,Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_DAY, GET_ACTIONS_COUNT} from "../../redux/actions/actions";

const style = makeStyles({
    typography:{
        fontSize: "32px",
        '&:hover':{
            cursor: "pointer"
        }
    }
})
function DateComponent({day}){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch({type:GET_ACTIONS_COUNT,payload:{ actions:[] ,id:day}})
    })
    let count =useSelector(state => state.calendar.actionCount);
    let currDay = useSelector(state => state.calendar.currentDay);

    const classes = style();
    return(
            <Typography className={classes.typography} variant="body1"  onClick={()=>{dispatch({type:CHANGE_DAY,payload:Number(day)})}}>
                {
                    count.length!==0? day + `(${count.length})`:day
                }
            </Typography>
    );
}
export default DateComponent;