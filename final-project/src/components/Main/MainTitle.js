import React from "react";
import {Typography} from "@material-ui/core";
import {useSelector} from "react-redux";

function MainTitle(){
    let user = useSelector(state => state.login.loginingData.Email || state.registration.registrationData.Email)
    return(<Typography variant={"h2"}>Hello User {user}</Typography>)
}
export default MainTitle;