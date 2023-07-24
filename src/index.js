import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseState from './Hooks/UseState';
import UseEffect from './Hooks/UseEffect'
import Main from './LocalStorage/Main';
import Register from './LocalStorage/Register';
import Login from './LocalStorage/Login';
import RemoveElementByIndex from './Components/Model';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    < RemoveElementByIndex />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


