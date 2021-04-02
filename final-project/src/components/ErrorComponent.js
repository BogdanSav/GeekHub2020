import React from "react";
import {useSelector} from "react-redux";
import {Container, Typography} from "@material-ui/core";

export const ErrorComponent=()=>{
    const message= useSelector(state => state.error)
    return(
        <Container maxWidth={"md"} align={"center"}>
            <Typography variant={"h5"}>{message}</Typography>
        </Container>
    );
}