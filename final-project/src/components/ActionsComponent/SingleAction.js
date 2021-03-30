import React, {useState} from "react";

import {Button, Grid, Input} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {DELETE, GET_ACTIONS_COUNT, MODIFY} from "../../redux/actions/actions";

function SingleAction({value, time, index}) {
    const dispatch = useDispatch();
    const [text, setText] = useState(value);
    const [updatedTime, updateTime] = useState(time);
    const [isModify, setIsModify] = useState(false);
    return (
        <Grid item>
            <Input value={text} onChange={(e) => {
                setIsModify(true)
                setText(e.target.value)
            }} required/>
            <Input value={updatedTime} onChange={(e) => {
                setIsModify(true)
                updateTime(e.target.value)
            }}
                   style={{width: "100px"}}
                   required/>
            {isModify ? <Button onClick={() => {
                dispatch({type: MODIFY, payload: {text, time: updatedTime, index}})
                dispatch({type: GET_ACTIONS_COUNT})
                setIsModify(false)
            }}>Update</Button> : null}
            <Button onClick={() => {
                dispatch({type: DELETE, payload: index})
                dispatch({type: GET_ACTIONS_COUNT})
            }}> Delete</Button>
        </Grid>
    );
}

export default SingleAction
