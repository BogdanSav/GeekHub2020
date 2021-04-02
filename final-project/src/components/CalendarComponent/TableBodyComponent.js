import React, { useEffect, useState} from "react";
import { TableBody, TableCell, TableRow } from "@material-ui/core";
import DateComponent from "./DateComponent";
import useCalendar from "../../hooks/useCalendar";
import {useDispatch, useSelector} from "react-redux";
import {GET_ACTIONS_COUNT} from "../../redux/actions/actions";
function TableBodyComponent() {
    const getCalendar = useCalendar();
    const dispatch = useDispatch();
    const [calendar,setCalendar] = useState(getCalendar.calendar)
    const count = useSelector(state => state.calendar.actionCount)
    const[counter,setCounter] = useState(count);
    useEffect(()=>{
        dispatch({type:GET_ACTIONS_COUNT})
        setCalendar(getCalendar.calendar)

    },[getCalendar.currMonth]);
    useEffect(()=>{
        setCounter(count);
    },[count])
    return (
        <TableBody>
                {calendar.map((week ,index) => (
                       <TableRow key={index}>
                           {week.map((day, ind)=>(
                               <TableCell key={ind}><DateComponent day={day} count={counter[Number(day)]}/> </TableCell>
                           ))}
                       </TableRow>
                    )
                )}
        </TableBody>
    );
}

export default TableBodyComponent;