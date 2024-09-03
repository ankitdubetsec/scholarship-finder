import React from "react";
import axios from "axios";
import "./App.css";
import "./component/style.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from "./Pages/RegistrationForm";
import User from "./component/User";
import "./component/style.css";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Userdashboardapp from "./Userdashboardapp";
import Login from "../src/Pages/Login";
import Adminlogin from "../src/Pages/Adminlogin";
import Copy from "./Copy";
import Scholarship from "./Scholorship";
import Profile from "./Pages/Profile";
import Notification from "./Pages/Notification";
import Track from "./Pages/Track";
import Adminsignup from "./Pages/AdminSignup";
import Create from "./Pages/Create";
import Scholarships from "./admin_component/Scholarships";
import Dashboard from "./admin_component/Dashboard";
function App() {
  const [user, setuser] = React.useState([]);
  const [userdata, setuserdata] = React.useState({});
  const [profprop, setprofprop] = React.useState(" ");

  // React.useEffect(() => {
  //   // setLoading(true);
  //   console.log("rendered");

  //   //   const response = await fetch(`https://scholarship-find.onrender.com/api/auth/getstudent`, {
  //   //     method: "POST",
  //   //     headers: {
  //   //         "Content-Type": "application/json",
  //   //         "auth-token": localStorage.getItem('token')
  //   //     },
  //   // });
  //   axios
  //     .get("http://localhost:5000/api/admin/admingetdata", {
  //       headers: {
  //         "auth-token": localStorage.getItem("token"), // Replace with your actual token or any other header
  //         "Content-Type": "application/json", // Example header
  //         // Add any other headers as needed
  //       },
  //     })
  //     .then((res) => {
  //       console.log("chal rha");
  //       setuser(res.data.note);
  //       // setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log("nhi chal rha");
  //       console.log(error);
  //       // setLoading(false);
  //     });
  // }, [user]);
  //console.log("user")
  //console.log(user[0].schname)

  // let [num,setnum]=React.useState(()=>JSON.parse(localStorage.getItem("d"))||0)
  //   function updatetask(id){
  //       console.log("running")
  //       setnum(prevstate=>prevstate+1)

  //   }
  // React.useEffect(()=>{
  //     localStorage.setItem("d",JSON.stringify(user))
  // },[user])

  return (
    <div>
      <createScholarship />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Adminlogin" element={<Adminlogin />} />
          <Route path="/Adminsignup" element={<Adminsignup />} />
          <Route path="/createscholarship" element={<Create />} />
          <Route path="/adminscholarships" element={<Scholarships />} />
          <Route exact path="/register" element={<RegistrationForm />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/admindashboard" element={<Dashboard />} />
          <Route
            exact
            path="/userdashboard"
            element={
              <Userdashboardapp
                setuser={setuser}
                user={user}
                setuserdata={setuserdata}
                userdata={userdata}
              />
            }
          />
          <Route
            exact
            path="/admin"
            element={
              <Copy
                user={user}
                setuser={setuser}
                userdata={userdata}
                profprop={profprop}
                setprofprop={setprofprop}
              />
            }
          />
          <Route
            exact
            path="/profile"
            element={<Profile profprop={profprop} />}
          />
          <Route exact path="/scholarships" element={<Scholarship />} />
          <Route
            exact
            path="/notification"
            element={<Notification user={user} />}
          />
          <Route exact path="/track" element={<Track user={user} />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
