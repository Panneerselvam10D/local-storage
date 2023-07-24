// import React ,{ useState } from "react";
// import "./Login.css";


// const Login =() =>{

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [loginError, setLoginError] = useState(false);
  
//     const handleLogin = (e) => {
//       e.preventDefault();
  
      
//       const storedUserData = localStorage.getItem('userData');
//       if (storedUserData) {
//         const userData = JSON.parse(storedUserData);
  
        
//         if (username === userData.username && password === userData.password) {
         
//           alert('Login successful!');
//           setLoginError(false);
//         } else {
          
//           setLoginError(true);
//         }
//       } else {
        
//         alert('No user data found. Please register first.');
//       }
//     };
    
//     return(
//         <body>
//             <div className="container">
//         <form action="" id="login-form" onSubmit={handleLogin   }>
//             <h2>LOGIN</h2>
//             <div className="input-grp">
//                 <label htmlFor="username" >Username</label>
//                 <input type="username" name="username" id="username" value={username}
//               onChange={(e) => setUsername(e.target.value)}/>
//               <div className="error"></div>
//             </div>
//             <div className="input-grp">
//                 <label htmlFor="password" >password</label>
//                 <input type="password" name="password" id="password" value={password}
//               onChange={(e) => setPassword(e.target.value)}/>
//               <p>{userData.username}</p>
//                 <div className="error"></div>
//             </div>  
//             {loginError && <div className="error">Invalid credentials. Please try again.</div>}
//             <div> <button>LOGIN</button></div>
           
//         </form>
//     </div>
    
//         </body>
//     )
// }
// export default Login;

import React, { useState } from 'react';
import Register from './Register';
import './Login.css';

const Login = ({callback}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const logReg = () =>{
    callback(false)
}

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      const foundUser = userData.find(
        (user) => user.username === username && user.password === password
      );

      if (foundUser) {
        alert('Login successful!');
        setLoginError(false);
      } else {
        setLoginError(true);
      }
    } else {
      alert('No user data found. Please register first.');
    }
  };

  return (
    <div className="container">
      <form action="" id="login-form" onSubmit={handleLogin}>
        <h2>LOGIN</h2>
        <div className="input-grp">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="error"></div>
        </div>
        <div className="input-grp">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="error"></div>
        </div>
        {loginError && (
          <div className="error">Invalid credentials. Please try again.</div>
        )}
        <div>
          <button type="submit">LOGIN</button>
        </div>
        <>
        <p className='logReg'>don't have an account? <span onClick={logReg}>Register</span></p>
        </>
      </form>
    </div>
  );
};

export default Login;
