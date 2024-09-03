import { useState, React } from "react";
import "../styles/Login.css";
import SideImg from "../images/login.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
const Adminsignup = (props) => {
  let navigate = useNavigate();

  // const inputRef = useRef(null);
  const [signupCredentials, setSignupCredentials] = useState({
    email: "",
    password: "",
    name: "",
    contact: "",
  });
  const onChange = (e) => {
    setSignupCredentials({
      ...signupCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    // inputRef.current.focus();
    e.preventDefault();
    try {
      const response = await fetch(
        `https://scholarship-finder-updated.onrender.com/api/auth/createprovider`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: signupCredentials.email,
            password: signupCredentials.password,
            name: signupCredentials.name,
            contact: signupCredentials.contact,
          }),
        }
      );
      const json = await response.json();
      console.log(json);
      if (json.authToken) {
        // Save the authToken and Redirect.
        localStorage.setItem("token", json.authToken);
        navigate("/adminregister");
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
          <h1>REGISTER</h1>
          {/* <h3>Username</h3> */}
          <input
            type="text"
            placeholder="email"
            defaultValue={signupCredentials.email}
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
            defaultValue={signupCredentials.password}
            onChange={onChange}
          ></input>
          <input
            type="text"
            placeholder="Name"
            defaultValue={signupCredentials.name}
            // className={isFocused ? 'input-with-shadow' : ''}
            onChange={onChange}
            name="name"
            // onFocus={handleFocus}
            // onBlur={handleBlur}
          ></input>
          <input
            type="text"
            placeholder="Contact"
            defaultValue={signupCredentials.contact}
            // className={isFocused ? 'input-with-shadow' : ''}
            onChange={onChange}
            name="contact"
            // onFocus={handleFocus}
            // onBlur={handleBlur}
          ></input>

          <div className="buttons">
            <button
              style={{ borderRadius: "10px", padding: "15px", marginRight: 0 }}
              type="submit"
            >
              Submit
            </button>
            <button
              onClick={() => navigate("/adminlogin")}
              style={{ borderRadius: "10px", padding: "15px" }}
              type="submit"
            >
              Log in
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

export default Adminsignup;
