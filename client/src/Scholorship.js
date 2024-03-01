import React from "react"

import './App.css';
import './component/style.css';

import Home from './Pages/Home';
// import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import RegistrationForm from './Pages/RegistrationForm';
import User from './scholorshipcomponent/User'
function Scholorship() {
  return (
    <div>
     <User/>
    </div>
  );
}

export default Scholorship;
