import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {IconButton, Typography} from "@material-ui/core";

import useCalendar from "../../hooks/useCalendar";
import {CHANGE_MONTH} from "../../redux/actions/actions";

function MonthSwitch() {
    const dispatch = useDispatch()
    let initMonth = useSelector(state => state.calendar.currentMonth);
    let [currentMonth, setCurrentMonth] = useState(initMonth);
    useEffect(() => {
        dispatch({type: CHANGE_MONTH, payload: currentMonth});
    }, [currentMonth])

    let month = useCalendar();
    return (
        <React.Fragment>
            <IconButton component={"span"} onClick={() => {
                currentMonth <= 0 ? setCurrentMonth(0) : setCurrentMonth(currentMonth - 1)
            }}>
                <ArrowBackIosIcon fontSize={"large"}/>
            </IconButton>
            <Typography component={"span"} variant={"h3"}>{month.currMonth}</Typography>
            <IconButton component={"span"} onClick={() => {
                currentMonth >= 11 ? setCurrentMonth(11) : setCurrentMonth(currentMonth + 1)
            }}>
                <ArrowForwardIosIcon fontSize={"large"}/>
            </IconButton>
        </React.Fragment>


    );
}

export default MonthSwitch