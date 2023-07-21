import React, { useContext } from "react";
import Parent from "./parent";
import contextVar from "./Context";


const Child = (props) => {
    let {valData} = useContext(contextVar)
    console.log(valData)

    return(
        <p>
            {valData}
        </p>
    )

}

export default Child;