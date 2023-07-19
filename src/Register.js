import React ,{ useState } from 'react';
import "./Register.css"

const Register = () =>{
    const[username, setUsername]= useState('')
    const[email, setEmail]= useState('')
    const[password, setPassword]= useState('')
    const[cpassword, setCpassword]= useState('')
    const [registrationError, setRegistrationError] = useState('');
        
        
    let userData;

    const handleReg=() =>{
        const storedUserData = localStorage.getItem('userData');
        
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
      
            
            if (userData.username === username) {
              setRegistrationError('Username already exists. Please choose a different one.');
              return;
            }
      
            if (userData.email === email) {
              setRegistrationError('Email address is already registered. Please use a different one.');
              return;
            }
          }
      
          if (password !== cpassword) {
            setRegistrationError('Password and confirm password do not match.');
            return;
          }


         const newUserData ={
            username,
            email,
            password,
            cpassword
           
         }
         localStorage.setItem('userData' ,JSON.stringify(newUserData))

    }
    



    return(
        
    <body>
    <div className="container ">
        <form action="" id="form">
            <h2>REGISTER</h2>

            <div className="input-grp">
                <label for="username">Username</label>
                <input type="text"
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
                 name="username" 
                 id="username" />
                <div className="error">

                </div>
            </div>
            <div className="input-grp">
                <label for="email">Email</label>
                <input type="text" 
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                name="email" 
                id="email" />
                <div className="error">
                    
                </div>
            </div>
            <div className="input-grp">
                <label for="password">Password</label>
                <input type="password" 
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                name="password" 
                id="password" />
                <div className="error">
                   
                </div>
            </div>
            <div className="input-grp">
                <label for="cpassword">Confirm password</label>
                <input type="password"
                value={cpassword}
                onChange={(e)=>{setCpassword(e.target.value)}}
                 name="confirm password" 
                 id="cpassword" />
                <div className="error">

                {registrationError && <div className="error">{registrationError}</div>}
                    
                </div>
            </div>
            <div>
                <button onClick={handleReg}>Submit</button>
                
            </div>

        </form>
    </div>
    </body>
    )
    localStorage.removeItem(username);
}
export default Register;