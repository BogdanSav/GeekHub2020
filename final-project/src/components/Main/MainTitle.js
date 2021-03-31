import React from "react";
import {Typography} from "@material-ui/core";
import {useSelector} from "react-redux";

function MainTitle(){
    let user = useSelector(state => state.login.loginingData.email || state.registration.registrationData.email)
    return(<Typography variant={"h2"}>Hello User {user}</Typography>)
}
export default MainTitle;