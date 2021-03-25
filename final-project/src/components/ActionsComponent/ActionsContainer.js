import React from "react";
import ActionsTitle from "./ActionsTitle";
import ActionComponent from "./ActionComponet";
function ActionsContainer(){
    return(
        <React.Fragment>
            <ActionsTitle/>
            <ActionComponent/>
        </React.Fragment>
    );
}
export default ActionsContainer