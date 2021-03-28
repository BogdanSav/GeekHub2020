import React, {useState} from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Button, Grid, IconButton, Input, MenuItem, Select, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {ADD_NEW} from "../../redux/actions/actions";

function SwitchDay() {

    const dispatch =useDispatch();
    let [text,setText] =useState("");
    const [selectVar, setVar] = useState("single input");
    let [time,setTime] = useState("");

    return (
        <Grid container direction={"column"} alignItems={"center"} style={{padding:"20px"}}>
            <Grid item><IconButton component={"span"}>
                <ArrowBackIosIcon/>
            </IconButton>
                <Typography component={"span"}>Day</Typography>
                <IconButton component={"span"}>
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