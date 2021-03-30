import React, {useEffect} from 'react';
import { Grid,Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import InputComponent from "./InputComponent";
import {useHistory} from "react-router-dom";
import {REGISTER} from "../../redux/actions/actions";

function RegistrationComponent(){
    let dispatch = useDispatch();
    let register = useSelector(state => state.registration.register);
    let history = useHistory();
    useEffect(()=>{
        if(register){
            history.push("/main");
        }
        else history.push("/registration");
    },[register])
    let onSubmit =(e)=>{
        e.preventDefault();
    }
    let reg =()=>{
        dispatch({type:REGISTER,payload:true});
    }

   return (
    <form onSubmit={onSubmit}>
            <Grid container direction="column" justify="space-between" alignItems="center" spacing={4} >
                <InputComponent id="nameInput" type="text" holder={"type your name/nickname"} text={"Name"} />
                <InputComponent id="emailInput" type="email" holder={"type your email"} text={"Email"} />
                <InputComponent id="passwordInput" type="password" text={"Password"} />

                <Grid item>
                  <Button color={"primary"} variant={"outlined"} onClick={()=>{reg()}}>Register now</Button>
                </Grid>
              
            </Grid>
            
        </form>
   );
}

export default RegistrationComponent;