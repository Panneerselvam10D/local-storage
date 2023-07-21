import React from "react";
import Child from "./child";
import contextVar from "./Context";


const Parent = () => {
    const data ='hello'
    //{console.log(typeof(data))}

    return(
        <contextVar.Provider value={{data:data}}>
           
        <Child />
        </contextVar.Provider>
        
    )
}
export default Parent;