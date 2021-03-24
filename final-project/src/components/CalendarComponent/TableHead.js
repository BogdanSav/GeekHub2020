import React from "react";
import {TableHead,TableRow,TableCell} from "@material-ui/core";
import moment from "moment";

function TableHeadComponent(){
    const weekdays = moment.localeData("en-gb").weekdaysShort(true);
    return(
        <TableHead>
            <TableRow>
                {weekdays.map((day,index)=>(
                    <TableCell key={index} component={"th"}>{day.toUpperCase()}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    );

}
export default TableHeadComponent;