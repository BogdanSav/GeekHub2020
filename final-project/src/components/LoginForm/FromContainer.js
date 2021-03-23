import React ,{useEffect}from "react";
import {useSelector} from "react-redux";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
function FormContainer(){
    let reg= useSelector(state => state.login);
    useEffect(()=>{
        console.log(reg)
    },[reg])
    if(reg){
       return <RegistrationForm/>
    }
    return <LoginForm/>
}
export default FormContainer;