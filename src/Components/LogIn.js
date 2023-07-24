import React, { useState } from "react"
import LogOut from "./LogOut"

const LogIn = ({callBack})=>{

    const handleClk =() =>{
       

        callBack(true)
    }
   

    return(
        <React.Fragment>
            <form className="form" onSubmit={handleClk}>
               
                <label className="label">Username</label>
                <input className="input"></input>
                <label className="label">password</label>
                <input className="input"></input>
                <button className="button">Log In</button>
               
                </form>
        </React.Fragment>
    )
}
export default LogIn;