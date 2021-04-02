import React from "react";
import {TableHead, TableRow, TableCell, Typography} from "@material-ui/core";
import moment from "moment";

function TableHeadComponent(){
    const weekdays = moment.localeData("en-gb").weekdaysShort(true);
    return(
        <TableHead>
            <TableRow>
                {weekdays.map((day,index)=>(
                    <TableCell key={index} component={"th"}>
                     <Typography variant={"h5"}> {day.toUpperCase()}</Typography>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );

}
export default TableHeadComponent;