import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {IconButton, Typography} from "@material-ui/core";

import useCalendar from "../../hooks/useCalendar";
import {CHANGE_MONTH, GET_USER_DATA} from "../../redux/actions/actions";

function MonthSwitch() {
    const dispatch = useDispatch()
    const initMonth = useSelector(state => state.calendar.currentMonth);
    const [currentMonth, setCurrentMonth] = useState(initMonth);
    useEffect(() => {
        dispatch({type: CHANGE_MONTH, payload: currentMonth});
        dispatch({type:GET_USER_DATA,payload:[]});
    }, [currentMonth])
    const prevMonth = useCallback(()=>{
        currentMonth <= 0 ? setCurrentMonth(0) : setCurrentMonth(currentMonth - 1)
    },[currentMonth])
    const nextMonth = useCallback(()=>{
        currentMonth >=11 ? setCurrentMonth(11) : setCurrentMonth(currentMonth + 1)
    },[currentMonth])

    const month = useCalendar();
    return (
        <React.Fragment>
            <IconButton component={"span"} onClick={prevMonth}>
                <ArrowBackIosIcon fontSize={"large"}/>
            </IconButton>
            <Typography component={"span"} variant={"h3"}>{month.currMonth}</Typography>
            <IconButton component={"span"} onClick={nextMonth}>
                <ArrowForwardIosIcon fontSize={"large"}/>
            </IconButton>
        </React.Fragment>


    );
}

export default MonthSwitch