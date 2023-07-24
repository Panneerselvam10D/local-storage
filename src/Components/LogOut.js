import React,{ useState } from "react";
import LogIn from "./LogIn";


const LogOut = ({callBack}) =>{
      const handleClk = () =>{
        callBack(false)
      }

    return(
        <>
        <h1>Hey! YOU have Loged in</h1>
        <button onClick={handleClk}>logOut</button>
      
        </>
    )
}
export default LogOut;