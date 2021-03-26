import React, {useState} from "react";

import {Input ,Grid ,Select,MenuItem ,InputLabel, FormControl} from "@material-ui/core";


function SingleAction({value}){
    const variants = ["single input", "multiple input"];
    const [selectVar, setVar] = useState("select");
    return(
        <Grid item>
                <Input value={value} />
                <Select defaultValue={selectVar} value={selectVar} onChange={event => setVar(event.target.value)}>
                    {variants.map((variant)=>(
                        <MenuItem value={variant}>
                            {variant}
                        </MenuItem>
                    ))}
                </Select>
            { selectVar=="single input" ? <span> 1</span>: null}
        </Grid>
    );
}
export default SingleAction
