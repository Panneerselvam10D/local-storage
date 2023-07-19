import React, { useState } from'react';
import PortalComponent from './PortalComponent';
import Model from './Model';


const Component2 = ()=>{
const[displayModel,setDisplayModel]=useState(false);
const showModel =() =>{
    setDisplayModel(true)
}

    return(
       <React.Fragment>
        <h3> This is component2  </h3>
        <p>paragraph</p>
        {/* <PortalComponent /> */}
        <button onClick={showModel}>Show Model</button>
        <Model displayModel={displayModel} />


        </React.Fragment>
           
    );
};
export default Component2;