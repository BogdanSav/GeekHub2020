import React from "react";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useDispatch} from "react-redux";
import {CHANGE_DAY} from "../../redux/actions/actions";

const style = makeStyles({
    typography: {
        fontSize: "32px",
        '&:hover': {
            cursor: "pointer"
        }
    }
})

function DateComponent({day, count}) {
    const dispatch = useDispatch();
    const classes = style();
    return (
        <Typography className={classes.typography} variant="body1" onClick={() => {
            dispatch({type: CHANGE_DAY, payload: Number(day)})
        }}>
            {
                count&&count!==0 ? day + `(${count})` : day
            }
        </Typography>
    );
}

export default DateComponent;