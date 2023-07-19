import { useRef } from "react"

const RefDemo = () =>{
    const refName =useRef();
   
    const handleRef = () =>{
            console.log(refName.current.value);
    }

    return(
        <>
        <span>name</span>
        <input type="text" ref={refName} />
        <button onClick={handleRef}>Button</button>
        </>
        
    )
}
export default RefDemo;