import React, {useState, useEffect} from "react"; 

const UseEffect  = () =>{
    const[count, setCount] =useState(0);

    useEffect(()=>{
            const intervalId = setInterval(()=>{
                setCount((prevCount)=>prevCount+1)
            },3000)
            return()=>{
                clearInterval(intervalId)
            }
    },[count])

    


    return(
        <>
        <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )

}
export default UseEffect;