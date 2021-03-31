import React, {useEffect, useState} from "react";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_DAY, GET_USER_DATA} from "../../redux/actions/actions";

const style = makeStyles({
    typography: {
        fontSize: "32px",
        '&:hover': {
            cursor: "pointer"
        }
    }
})

function DateComponent({day, count}) {
    const dispatch = useDispatch();
    const classes = style();
    let [counter,setCounter]= useState(count);
    const state = useSelector(state => state.calendar.actionCount);
    useEffect(()=>{
        setCounter(count);
    },[state])
    useEffect(()=>{
        setCounter(count);
    })
    return (
        <Typography className={classes.typography} variant="body1" onClick={() => {
            dispatch({type: CHANGE_DAY, payload: Number(day)})
            dispatch({type:GET_USER_DATA,payload:[]});

        }}>
            {
                counter&&counter!==0 ? day + `(${counter})` : day
            }
        </Typography>
    );
}

export default DateComponent;