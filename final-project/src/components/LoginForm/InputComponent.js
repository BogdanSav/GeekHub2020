import React,{useState,useEffect} from "react";
import { Grid,FormControl,Input, InputLabel} from "@material-ui/core"
import {useDispatch} from "react-redux";
import {REGISTER_NEW_USER} from "../../redux/actions/actions";

function InputComponent({id,type,holder,text,state}){
    let [inputValue, setInputValue] = useState("");
    let dispatch = useDispatch();
    useEffect(()=>{
        if(state&&inputValue){
            dispatch({type: REGISTER_NEW_USER,payload:{[text]:inputValue}});
        }
        if(state&&type==="password"){
            dispatch({type: REGISTER_NEW_USER,payload:{[text]:inputValue}});
        }
        setInputValue("");
    },[state]);
    return(
        <Grid item>
            <FormControl size="medium">
                <InputLabel htmlFor={id}>{text}</InputLabel>
                <Input type={type} id={id} value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}  required placeholder={holder ||""}/>
            </FormControl>
        </Grid>
    );
}
export default InputComponent;