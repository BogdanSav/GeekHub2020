import React, {useState} from "react";

import {Input ,Grid ,Select,MenuItem, Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {DELETE} from "../../redux/actions/actions";

function SingleAction({value,time,index}){
    const dispatch = useDispatch()

    return(
        <Grid item>
                <Input value={value} />
                <Input value={time} style={{width:"100px"}}/>
            <Button onClick={()=>{dispatch({type:DELETE,payload:index})}}> Delete</Button>
        </Grid>
    );
}
export default SingleAction
