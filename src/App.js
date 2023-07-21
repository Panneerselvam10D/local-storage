import logo from './logo.svg';
import './App.css';
import Component1 from './Components/Component1';
import { useEffect, useState } from 'react';
import LogIn from './Components/LogIn';
import LogOut from './Components/LogOut';

function App() {
  const[isLoggedIn, setIsLoggedIN] = useState(false); 
  useEffect(()=>{
    let  isLogedInVal =localStorage.getItem('isLogedInVal')
    if(isLogedInVal === '1'){
      setIsLoggedIN(true) 
    }
  
  },[isLoggedIn])

  
    const valChange =(newVal) =>{
       localStorage.setItem('isLogedInVal', '1')
      setIsLoggedIN(newVal)
    }
    const valSetFalse =(newVal) =>{
      localStorage.removeItem('isLogedInVal')
            setIsLoggedIN(newVal)
    }
   


  return (
    <>
    
    {isLoggedIn &&  <LogOut callBack={valSetFalse} />}
    {!isLoggedIn &&  <LogIn callBack={valChange} />}
   
      </>
      

  )
}
export default App;
