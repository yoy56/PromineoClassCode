import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import LoginBox from './components/login_box';
import Navbar from './components/narbar';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <div>
    <Navbar/>
    <LoginBox/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
