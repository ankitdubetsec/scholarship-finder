import './App.css';
import './component/style.css';
import './admin_component/styles.css';
import './admin_component/profile.css';
import User from './component/User'
import Students from './admin_component/Students'
import AdUser from './admin_component/AdUser'
import Profile from './admin_component/Profile'
function Copy(props) {
  return (
    <div>
     {/* <Profile /> */}
     <AdUser user={props.user}
     setuser={props.setuser}
      userdata={props.userdata}
      profprop={props.profprop}
      setprofprop={props.setprofprop}/>
     {/* <User /> */}
     {/* <Students /> */}
    </div>
  );
}

export default Copy;
