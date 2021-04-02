import React, {useCallback, useState} from "react";

import {Button, Grid, Input} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {DELETE, GET_ACTIONS_COUNT, MODIFY} from "../../redux/actions/actions";

function SingleAction({value, time, index}) {
    const dispatch = useDispatch();
    const [text, setText] = useState(value);
    const [updatedTime, updateTime] = useState(time);
    const [isModify,setIsModify] = useState(false)
    const handleTextChange= useCallback((e)=>{
        setIsModify(true)
        setText(e.target.value)
    },[text])
    const handleTimeChange= useCallback((e)=>{
        setIsModify(true)
        updateTime(e.target.value)
    },[updatedTime])
    const handleClickModify= useCallback(()=>{
        dispatch({type: MODIFY, payload: {text, time: updatedTime, index}})
        dispatch({type: GET_ACTIONS_COUNT})
        setIsModify(false)
    },[])
    const handleDelete = useCallback(()=>{
        dispatch({type: DELETE, payload: index})
        dispatch({type: GET_ACTIONS_COUNT})
    },[])
    return (
        <Grid item>
            <Input value={text} onChange={handleTextChange} required/>
            <Input value={updatedTime} onChange={handleTimeChange}
                   style={{width: "100px"}}
                   required/>
            {isModify ? <Button onClick={handleClickModify}>Update</Button> : null}
            <Button onClick={handleDelete}> Delete</Button>
        </Grid>
    );
}

export default SingleAction
