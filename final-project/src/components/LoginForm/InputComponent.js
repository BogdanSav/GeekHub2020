import React,{useState,useEffect} from "react";
import { Grid,FormControl,Input, InputLabel} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux";
import {REGISTER_NEW_USER,LOGGING_IN, LOGGING_DATA} from "../../redux/actions/actions";

function InputComponent({id,type,holder,text}){
    let logining = useSelector(state => state.login.loggedIn);
    let register = useSelector(state => state.registration.register);
    let [inputValue, setInputValue] = useState("");
    let dispatch = useDispatch();
    useEffect(()=>{
        if(register&&inputValue){
            dispatch({type: REGISTER_NEW_USER,payload:{[text]:inputValue}});
        }
        if(logining&&inputValue){
            dispatch({type:LOGGING_DATA,payload: {[text]:inputValue}});
        }
        setInputValue("");
    },[logining,register]);
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