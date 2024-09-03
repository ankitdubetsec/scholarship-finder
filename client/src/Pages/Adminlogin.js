import { useState, React } from "react";
import "../styles/Login.css";
import SideImg from "../images/login.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
const Adminlogin = (props) => {
  let navigate = useNavigate();

  // const inputRef = useRef(null);
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    // inputRef.current.focus();
    e.preventDefault();
    try {
      const response = await fetch(
        `https://scholarship-finder-updated.onrender.com/api/auth/Adminlogin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: loginCredentials.email,
            password: loginCredentials.password,
          }),
        }
      );
      const json = await response.json();
      console.log(json);
      if (json.authToken) {
        // Save the authToken and Redirect.
        localStorage.setItem("admintoken", json.authToken);
        navigate("/admin");
        toast.success("Logged In Successfully");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      // console.log("Hello");
      // toast.error("Something went wrong");
      console.log(error.message);
    }
  };
  // const [isFocused, setIsFocused] = useState(false);

  // const handleFocus = () => {
  //   setIsFocused(true);
  // };

  // const handleBlur = () => {
  //   setIsFocused(false);
  // };

  return (
    <>
      <div className="containers">
        <form
          style={{ paddingRight: "200px", margin: "auto" }}
          onSubmit={handleSubmit}
          className="contents"
        >
          <h1>LOG IN</h1>
          {/* <h3>Username</h3> */}
          <input
            type="text"
            placeholder="Username"
            defaultValue={loginCredentials.email}
            // className={isFocused ? 'input-with-shadow' : ''}
            onChange={onChange}
            name="email"
            // onFocus={handleFocus}
            // onBlur={handleBlur}
          ></input>
          {/* <label>Password</label> */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            defaultValue={loginCredentials.password}
            onChange={onChange}
          ></input>

          <div className="buttons">
            <button
              style={{ borderRadius: "10px", padding: "15px", marginRight: 0 }}
              type="submit"
            >
              Submit
            </button>
            <button
              onClick={() => navigate("/adminsignup")}
              style={{ borderRadius: "10px", padding: "15px" }}
              type="submit"
            >
              Register
            </button>
          </div>
        </form>

        <div className="sideimg">
          <img
            style={{ width: "400px", height: "400px", marginRight: "120px" }}
            src={SideImg}
          ></img>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Adminlogin;
