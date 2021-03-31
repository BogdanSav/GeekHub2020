import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CircularProgress, {Box} from "@material-ui/core";
import MainTitle from "./MainTitle";
import CalendarTable from "../CalendarComponent/CalendarTable";
import ActionsContainer from "../ActionsComponent/ActionsContainer";
import MonthSwitch from "../CalendarComponent/MonthSwitch";
import {useSelector} from "react-redux";
function MainContainer(){
    const actionStyle={
        border:"1px solid black",
        borderRadius: "10px",
    }
    let auth = useSelector(state => state.login.auth);
    if(!auth){
        return <CircularProgress/>
    }
    return(
        <Container maxWidth={"xl"}>
            <Box component={"div"} align="center" style={{marginTop:"50px"}}>
                <MainTitle />
            </Box>
            <Grid container justify={"space-around"} alignItems={"flex-start"}alignContent={"center"} style={{marginTop:"50px"}}>
                <Grid item xl={7} style={actionStyle}>
                    <Box component={"div"} align={"center"}>
                        <MonthSwitch/>
                    </Box>

                    <CalendarTable/>
                </Grid>
                <Grid item xl={4} style={actionStyle} >
                    <ActionsContainer/>
                </Grid>
            </Grid>
        </Container>

    );

}

export default MainContainer;