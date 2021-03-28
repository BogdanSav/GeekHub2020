import React, {useEffect, useState} from "react";
import {Button, TableBody, TableCell, TableRow} from "@material-ui/core";
import DateComponent from "./DateComponent";
import useCalendar from "../../hooks/useCalendar";
function TableBodyComponent() {
     let getCalendar = useCalendar();
     let [calendar,setCalendar] = useState(getCalendar.calendar)
    useEffect(()=>{
        setCalendar(getCalendar.calendar)
    },[getCalendar.currMonth]);
    return (
        <TableBody>
                {calendar.map((week ,index) => (
                       <TableRow key={index}>
                           {week.map((day, ind)=>(
                               <TableCell key={ind}><DateComponent day={day}/> </TableCell>
                           ))}
                       </TableRow>
                    )
                )}
        </TableBody>
    );
}

export default TableBodyComponent;