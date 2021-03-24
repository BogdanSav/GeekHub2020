import React from "react";
import {TableBody, TableCell, TableRow} from "@material-ui/core";
import moment from "moment";

function TableBodyComponent() {
    let month = "March";
    let days = [];
    // let weeks =[];
    // let weekdays = moment.localeData("en-gb").weekdays(true);

    for (let i = 1; i <= 31; i++) {
        days.push(moment().month(month).date(i).format("ddd, D"));
        // console.log(moment().month(month).date(i).format("ddd,MMM, D"));
    }

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