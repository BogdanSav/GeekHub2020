import React, {useEffect, useState} from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Button, Grid, IconButton, Input, MenuItem, Select, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {ADD_NEW,CHANGE_DAY} from "../../redux/actions/actions";
import useCalendar from "../../hooks/useCalendar";

function SwitchDay() {
    let day = useSelector(state => state.calendar.currentDay)
    const [currDay,setCurrDay] = useState(day);
    let month = useCalendar().currMonth;
    let lastDay = useCalendar().endDays
    const dispatch =useDispatch();

    let [text,setText] =useState("");
    const [selectVar, setVar] = useState("single input");
    let [time,setTime] = useState("");

    useEffect(()=>{
        dispatch({type:CHANGE_DAY,payload:currDay})
    },[month,currDay])
    useEffect(()=>{
        setCurrDay(day);
    },[day,month])



    return (
        <Grid container direction={"column"} alignItems={"center"} style={{padding:"20px"}}>
            <Grid item><IconButton component={"span"} onClick={()=>{ currDay<=1 ? setCurrDay(1): setCurrDay(currDay-1)}}>
                <ArrowBackIosIcon/>
            </IconButton>
                <Typography component={"span"}>{currDay} of {month}</Typography>
                <IconButton component={"span"} onClick={()=>{currDay>=lastDay ? setCurrDay(lastDay): setCurrDay(currDay+1)}}>
                    <ArrowForwardIosIcon/>
                </IconButton></Grid>
            <Grid item>
                <Input value={text} onChange={(event)=>{setText(event.target.value)}} placeholder={"your task"}/>
                {selectVar === "single input" ?
                    <Input value={time} onChange={(e)=>(setTime(e.target.value))} style={{width:"100px"}} placeholder={"time - hh:mm"}/>: null}
                <Select defaultValue={selectVar} value={selectVar} onChange={event => setVar(event.target.value)}>
                    <MenuItem value={"single input"} > single input</MenuItem>
                    <MenuItem value={"multiple input"}> multiple input</MenuItem>
                </Select>
                <Button onClick={()=>{
                    dispatch({type:ADD_NEW,payload:{text,time}});
                    setText("")
                }}>Add</Button>
            </Grid>
        </Grid>
    );
}

export default SwitchDay;