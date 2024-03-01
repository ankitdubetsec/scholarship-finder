import React from "react"

import './App.css';
import './component/style.css';
import { Link } from "react-router-dom";
import Home from './Pages/Home';
// import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import RegistrationForm from './Pages/RegistrationForm';
import User from './component/User'
function Userdashboardapp(props) {
  return (
    <div>
      <User user={props.user}
     setuser={props.setuser} 
     setuserdata={props.setuserdata} 
     userdata={props.userdata}/>
      
    </div>
  );
}

export default Userdashboardapp;
