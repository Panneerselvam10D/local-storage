// import React ,{ useState, useEffect } from 'react';
// import "./Register.css"

// const Register = () =>{
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [cpassword, setCpassword] = useState('');
//     const [registrationError, setRegistrationError] = useState('');
//     const [userData, setUserData] = useState([]);
  
//     useEffect(() => {
//       // Fetch existing user data from localStorage on component mount
//       const storedUserData = localStorage.getItem('userData');
//       if (storedUserData) {
//         setUserData(JSON.parse(storedUserData));
//       }
//     }, []);
  
//     const handleReg = () => {
//       // Check for existing users with the same username or email
//       const existingUser = userData.find(
//         (user) => user.username === username || user.email === email
//       );
  
//       if (existingUser) {
//         setRegistrationError(
//           existingUser.username === username
//             ? 'Username already exists. Please choose a different one.'
//             : 'Email address is already registered. Please use a different one.'
//         );
//         return;
//       }
  
//       if (password !== cpassword) {
//         setRegistrationError('Password and confirm password do not match.');
//         return;
//       }
  
//       // Create new user data object
//       const newUserData = {
//         username,
//         email,
//         password,
//         cpassword,
//       };
  
//       // Update userData state with the new user data
//       setUserData([...userData, newUserData]);
  
//       // Save updated userData array to localStorage
//       localStorage.setItem('userData', JSON.stringify([...userData, newUserData]));
  
//       // Clear the form fields after successful registration
//       setUsername('');
//       setEmail('');
//       setPassword('');
//       setCpassword('');
//       setRegistrationError('');
//     };


//     return(
        
//     <body>
//     <div className="container ">
//         <form action="" id="form">
//             <h2>REGISTER</h2>

//             <div className="input-grp">
//                 <label for="username">Username</label>
//                 <input type="text"
//                 value={username}
//                 onChange={(e)=>{setUsername(e.target.value)}}
//                  name="username" 
//                  id="username" />
//                 <div className="error">

//                 </div>
//             </div>
//             <div className="input-grp">
//                 <label for="email">Email</label>
//                 <input type="text" 
//                 value={email}
//                 onChange={(e)=>{setEmail(e.target.value)}}
//                 name="email" 
//                 id="email" />
//                 <div className="error">
                    
//                 </div>
//             </div>
//             <div className="input-grp">
//                 <label for="password">Password</label>
//                 <input type="password" 
//                 value={password}
//                 onChange={(e)=>{setPassword(e.target.value)}}
//                 name="password" 
//                 id="password" />
//                 <div className="error">
                   
//                 </div>
//             </div>
//             <div className="input-grp">
//                 <label for="cpassword">Confirm password</label>
//                 <input type="password"
//                 value={cpassword}
//                 onChange={(e)=>{setCpassword(e.target.value)}}
//                  name="confirm password" 
//                  id="cpassword" />
//                 <div className="error">

//                 {registrationError && <div className="error">{registrationError}</div>}
                    
//                 </div>
//             </div>
//             <div>
//                 <button onClick={handleReg}>Submit</button>
                
//             </div>

//         </form>
//     </div>
//     </body>
//     )
    
// }
// export default Register;

import React, { useState } from 'react';
import Login from './Login';
import './Register.css';

const Register = ({callback}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  const regLogin =()=>{
    callback(true)
 
  }
  
  
  const handleReg = () => {
    const storedUserData = localStorage.getItem('userData');
    const existingUserData = storedUserData ? JSON.parse(storedUserData) : [];

    const existingUser = existingUserData.find(
      (user) => user.username === username || user.email === email
    );

    if (existingUser) {
      setRegistrationError(
        existingUser.username === username
          ? alert('Username already exists. Please choose a different one.')
          : alert('Email address is already registered. Please use a different one.')
      );
      return;
    }

    if (password !== cpassword) {
      setRegistrationError('Password and confirm password do not match.');
      return;
    }

    const newUserData = {
      username,
      email,
      password,
    };

    const updatedUserData = [...existingUserData, newUserData];
    localStorage.setItem('userData', JSON.stringify(updatedUserData));
    alert('Register successful!')

    
    setUsername('');
    setEmail('');
    setPassword('');
    setCpassword('');
    setRegistrationError('');
  };

  return (
    <div className="container">
      <form action="" id="form">
        <h2>REGISTER</h2>

        <div className="input-grp">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            id="username"
          />
          <div className="error"></div>
        </div>
        <div className="input-grp">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
          />
          <div className="error"></div>
        </div>
        <div className="input-grp">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
          />
          <div className="error"></div>
        </div>
        <div className="input-grp">
          <label htmlFor="cpassword">Confirm password</label>
          <input
            type="password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            name="confirm password"
            id="cpassword"
          />
          <div className="error">
            {registrationError && <div className="error">{registrationError}</div>}
          </div>
        </div>
        <div>
          <button type="button" onClick={handleReg}>
            Submit
          </button>
        </div>
        <>
        <p className='regLogin'>already a member <span onClick={regLogin}>Login</span></p>
        </>
      </form>
    </div>
  );
};

export default Register;
