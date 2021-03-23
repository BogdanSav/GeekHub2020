import React from 'react';
import { Grid,FormControl,Input, InputLabel, Button,} from "@material-ui/core"
function RegistrationComponent(){
   return (
    <form>
            <Grid container direction="column" justify="space-between" alignItems="center" spacing={4} >
            <Grid item>
                <FormControl size="medium">
                        <InputLabel htmlFor="nameInput">Name</InputLabel>
                        <Input type="text" id="nameInput" required placeholder="Type your name/nickname"/>
                    </FormControl>
                </Grid>
                <Grid item >
                    <FormControl size="medium">
                        <InputLabel htmlFor="emailInput">Email</InputLabel>
                        <Input type="email" id="emaiInput"  placeholder="Type your Email" required/>
                    </FormControl>
                </Grid>
                <Grid item> 
                    <FormControl size="medium">
                        <InputLabel htmlFor="passwordInput">Password</InputLabel>
                        <Input type="password" id="passwordInput" required />
                    </FormControl>
                </Grid>
                <Grid item>
                    <Button type="submit" color={"primary"} variant={"outlined"}>Register now</Button>
                </Grid>
              
            </Grid>
            
        </form>
   );
}

export default RegistrationComponent;