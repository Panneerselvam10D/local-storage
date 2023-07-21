
import React,{useEffect, useState} from "react";

const UseEffect = () =>{
    console.log("rendered");
    const[option, setOption]=useState('')
    useEffect(()=>{console.log(option);},[option])
    
    return(
        <>
        <button onClick={()=>{setOption('React')}}>React</button>
        <button onClick={()=>{setOption('node')}}>node</button>
        <button onClick={()=>{setOption('js')}}>js</button>

        <h2>{option}</h2>
        </>
    )
}

// export default UseEffect;

const UseEffectUsingCount = () =>{
    const [counter, setCounter] = useState(0);

    // useEffect to display an alert when the counter reaches 5
    useEffect(() => {
        console.log('from useeffect')
      if (counter === 5) {
        alert('Counter reached 5!');
        console.log('from useeffect if')
      }
    }, [counter]); // The dependency array ensures the effect runs whenever the 'counter' changes.
  
    const handleIncrement = () => {
      setCounter(prevCounter => prevCounter + 1);
    };
  
    return (
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    );
  };
  
export default UseEffectUsingCount;