import React from "react";
import ActionsTitle from "./ActionsTitle";
import ActionComponent from "./ActionComponet";
import SwitchDay from "./SwitchDay";
function ActionsContainer(){
    return(
        <React.Fragment>
            <ActionsTitle/>
            <SwitchDay/>
            <ActionComponent/>
        </React.Fragment>
    );
}
export default ActionsContainer