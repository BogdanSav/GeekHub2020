import React, {useCallback, useEffect, useState} from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Button, Grid, IconButton, Input, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {ADD_NEW, CHANGE_DAY, GET_ACTIONS_COUNT, GET_USER_DATA} from "../../redux/actions/actions";
import useCalendar from "../../hooks/useCalendar";

function SwitchDay() {
    const day = useSelector(state => state.calendar.currentDay)
    const [currDay, setCurrDay] = useState(day);
    const month = useCalendar().currMonth;
    const lastDay = useCalendar().endDays
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {

        dispatch({type: CHANGE_DAY, payload: currDay})
        dispatch({type: GET_USER_DATA, payload: []});
        dispatch({type: GET_ACTIONS_COUNT})

    }, [month, currDay])
    useEffect(() => {
        setCurrDay(day);
    }, [day, month])
    const handleAddClick = useCallback(() => {
        const timeRule = /([0-1]?\d|2[0-3])(?::([0-5]?\d))?/;
        console.log((timeRule).test(time))
        if ((timeRule).test(time) && text) {
            dispatch({type: ADD_NEW, payload: {text, time}});
            dispatch({type: GET_ACTIONS_COUNT})
        } else {
            alert("empty action fields or invalid data")
        }
        setText("")
        setTime("")
    }, [text,time])
    const prevDay = useCallback(() => {
        currDay <= 1 ? setCurrDay(1) : setCurrDay(currDay - 1)
    }, [currDay])
    const nextDay = useCallback(() => {
        currDay >= lastDay ? setCurrDay(lastDay) : setCurrDay(currDay + 1)
    }, [currDay])
    const handleTextChange = useCallback((event)=>{
        setText(event.target.value)
    },[text])
    const handleTimeChange = useCallback((event)=>{
        setTime(event.target.value)
    },[time])

    return (
        <Grid container direction={"column"} alignItems={"center"} style={{padding: "20px"}}>
            <Grid item><IconButton component={"span"} onClick={prevDay}>
                <ArrowBackIosIcon/>
            </IconButton>
                <Typography component={"span"}>{currDay} of {month}</Typography>
                <IconButton component={"span"} onClick={nextDay}>
                    <ArrowForwardIosIcon/>
                </IconButton></Grid>
            <Grid item>
                <Input value={text} onChange={handleTextChange} placeholder={"your task"}/>
                <Input value={time} onChange={handleTimeChange} style={{width: "100px"}}
                       placeholder={"time - hh:mm"}/>

                <Button onClick={handleAddClick}>Add</Button>
            </Grid>
        </Grid>
    );
}

export default SwitchDay;