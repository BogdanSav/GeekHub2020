import React, {useState} from 'react';
import { Grid,Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import InputComponent from "./InputComponent";
import {Link} from "react-router-dom";

function RegistrationComponent(){

    let [state,setState] = useState(false);
    let onSubmit =(e)=>{
        e.preventDefault();
       setState(!state)

    }
   return (
    <form onSubmit={onSubmit}>
            <Grid container direction="column" justify="space-between" alignItems="center" spacing={4} >
                <InputComponent id="nameInput" type="text" holder={"type your name/nickname"} text={"Name"} state={state}/>
                <InputComponent id="emailInput" type="email" holder={"type your email"} text={"Email"} state={state}/>
                <InputComponent id="passwordInput" type="password" text={"Password"} state={state}/>

                <Grid item>
                   <Link to={"/main"}><Button type={"submit"} color={"primary"} variant={"outlined"}>Register now</Button> </Link>
                </Grid>
              
            </Grid>
            
        </form>
   );
}

export default RegistrationComponent;