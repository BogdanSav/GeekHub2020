import React from "react";
import {TableBody, TableCell, TableRow} from "@material-ui/core";
import moment from "moment";

function TableBodyComponent() {
    let month = "Mar";
    let days = [];
    let weeks =[];
    let weekdays = moment.localeData("en-gb").weekdaysShort(true);

    for (let i = 1; i <= 31; i++) {
        days.push(moment().month(month).date(i).format("ddd, D").split(","));
        // console.log(moment().month(month).date(i).format("ddd,MMM, D"));
    }

   console.log(moment().month(month).day(6).format("ddd, D"));
    return (
        <TableBody>

            <TableRow>
                {days.map((day, index) => (
                        <TableCell key={index}>{day}</TableCell>
                    )
                )}
            </TableRow>
        </TableBody>
    );
}

export default TableBodyComponent;