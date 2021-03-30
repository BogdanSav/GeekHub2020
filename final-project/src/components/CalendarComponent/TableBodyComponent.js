import React, {useEffect, useState} from "react";
import { TableBody, TableCell, TableRow} from "@material-ui/core";
import DateComponent from "./DateComponent";
import useCalendar from "../../hooks/useCalendar";
import {useDispatch, useSelector} from "react-redux";
import {GET_ACTIONS_COUNT} from "../../redux/actions/actions";
function TableBodyComponent() {
     let getCalendar = useCalendar();
     let [calendar,setCalendar] = useState(getCalendar.calendar)
    let count = useSelector(state => state.calendar.actionCount)
    let[counter,setCounter] = useState(count);
    useEffect(()=>{
        setCalendar(getCalendar.calendar)
    },[getCalendar.currMonth]);
    const dispatch = useDispatch();
    useEffect(()=>{
         dispatch({type:GET_ACTIONS_COUNT})
    },[getCalendar.currMonth ]);
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