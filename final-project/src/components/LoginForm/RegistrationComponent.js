import React, {useState} from 'react';
import { Grid,Button,} from "@material-ui/core";
import InputComponent from "./InputComponent";
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
                    <Button type={"submit"} color={"primary"} variant={"outlined"} >Register now</Button>
                </Grid>
              
            </Grid>
            
        </form>
   );
}

export default RegistrationComponent;