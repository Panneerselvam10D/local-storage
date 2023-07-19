import React ,{ useState } from "react";
import "./Login.css";


const Login =() =>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      // Fetch credentials from local storage
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
  
        // Check if the entered username and password match the stored credentials
        if (username === userData.username && password === userData.password) {
          // Login successful
          alert('Login successful!');
          setLoginError(false);
        } else {
          // Login failed
          setLoginError(true);
        }
      } else {
        // No user data found in local storage
        alert('No user data found. Please register first.');
      }
    };
    
    return(
        <body>
            <div className="container">
        <form action="" id="login-form" onSubmit={handleLogin   }>
            <h2>LOGIN</h2>
            <div className="input-grp">
                <label htmlFor="username" >Username</label>
                <input type="username" name="username" id="username" value={username}
              onChange={(e) => setUsername(e.target.value)}/>
              <div className="error"></div>
            </div>
            <div className="input-grp">
                <label htmlFor="password" >password</label>
                <input type="password" name="password" id="password" value={password}
              onChange={(e) => setPassword(e.target.value)}/>
              <p>{userData.username}</p>
                <div className="error"></div>
            </div>  
            {loginError && <div className="error">Invalid credentials. Please try again.</div>}
            <div> <button>LOGIN</button></div>
           
        </form>
    </div>
    
        </body>
    )
}
export default Login;