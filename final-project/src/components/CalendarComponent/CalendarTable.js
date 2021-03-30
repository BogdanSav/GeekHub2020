import React from "react";
import {Table, TableContainer} from "@material-ui/core";
import TableHeadComponent from "./TableHead";
import TableBodyComponent from "./TableBodyComponent";

function CalendarTable() {
    return (

        <TableContainer>
            <Table>
                <TableHeadComponent/>
                <TableBodyComponent/>
            </Table>
        </TableContainer>


    );
}

export default CalendarTable;