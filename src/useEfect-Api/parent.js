import { useEffect, useState } from "react";
import React from "react";
import Child from "./child";
import contextVar from "./Context";


const Parent = () => {
    const data ='hello'
    
    const [vdoLink, setVdoLink] = useState('');

    useEffect(() => {
      fetch('https://random.dog/woof.json')
        .then((res) => res.json())
        .then((link) => setVdoLink(link.url))
        .catch((error) => console.error('Error fetching video link:', error));
    }, []);
    
    return(
        <contextVar.Provider value={{data:data}}>
           <video src={vdoLink} width="750" height="500" controls>
     </video>
        <Child />
        </contextVar.Provider>
        
    )
}
export default Parent;