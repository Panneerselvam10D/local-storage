
import React, {useState} from "react"; 

const UseState = () =>{
    const[count, setCount] =useState(0);

    const handleIncrease =() =>{
            setCount(count+1)
    }

    const handleDecrease =() =>{
        setCount(count-1)
    }


    return(
        <>
        <button onClick={handleIncrease}>+</button>
        <span>{count}</span>
        <button onClick={handleDecrease}>-</button>
        </>
    )

}
export default UseState;