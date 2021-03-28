import React, {useEffect} from "react";
import ActionsTitle from "./ActionsTitle";
import ActionComponent from "./ActionComponet";
import SwitchDay from "./SwitchDay";
import {useDispatch} from "react-redux";
import {GET_USER_DATA} from "../../redux/actions/actions";
function ActionsContainer(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch({type:GET_USER_DATA,payload:[]});
    })
    return(
        <React.Fragment>
            <ActionsTitle/>
            <SwitchDay/>
            <ActionComponent/>
        </React.Fragment>
    );
}
export default ActionsContainer