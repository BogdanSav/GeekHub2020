import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MainTitle from "./MainTitle";
import CalendarTable from "../CalendarComponent/CalendarTable";
import ActionsContainer from "../ActionsComponent/ActionsContainer";
import MonthSwitch from "../CalendarComponent/MonthSwitch";
function MainContainer(){
    const actionStyle={
        border:"1px solid black",
        borderRadius: "10px",
    }
    return(
        <Container maxWidth={"xl"}>
            <MainTitle/>
            <MonthSwitch/>
            <Grid container justify={"space-around"} alignItems={"flex-start"}alignContent={"center"} >
                <Grid item xl={7} style={actionStyle}>
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