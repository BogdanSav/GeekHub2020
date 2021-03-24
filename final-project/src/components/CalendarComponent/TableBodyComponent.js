import React from "react";
import {TableBody, TableCell, TableRow} from "@material-ui/core";
import moment from "moment";

function TableBodyComponent() {
    let month = "Apr";
    const startWeek = moment().month(month).startOf('month').week();
    const endWeek = moment().month(month).endOf('month').week();
    let calendar = [];
    let weekdays = moment.localeData("en-gb").weekdaysShort(true);

    for (let i = startWeek; i <= endWeek; i++) {
        console.log(i)
       calendar.push(weekdays.map((day ,index)=>{
          return  moment().locale("en-gb").week(i-1).startOf('week').add(index, 'day').format(" D")
       }))
        // console.log(moment().month(month).date(i).format("ddd,MMM, D"));
    }

   console.log(calendar);
    return (
        <TableBody>
                {calendar.map((week, index) => (
                       <TableRow>
                           {week.map((day)=>(
                               <TableCell>{day}</TableCell>
                           ))}
                       </TableRow>
                    )
                )}
        </TableBody>
    );
}

export default TableBodyComponent;