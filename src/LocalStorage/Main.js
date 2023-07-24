import { useEffect, useState } from 'react';
import Register from './Register';
import Login from './Login';

const Main=()=> {
  const[isLoggedIn, setIsLoggedIN] = useState(false); 

  useEffect(()=>{
    let  isLogedInVal =localStorage.getItem('isLogedInVal')
    if(isLogedInVal === '1'){
      setIsLoggedIN(true) 
    }
  
  },[isLoggedIn])

  
    const valChange =(newVal) =>{
       
      setIsLoggedIN(newVal)
    }
    const valSetTrue =(newVal) =>{
      
            setIsLoggedIN(newVal)
    }
   


  return (
    <>
    
    {!isLoggedIn &&  <Register callback={valSetTrue} />}
    {isLoggedIn &&  <Login callback={valChange}/>}
   
      </>
      

  )
}
export default Main;