// RegistrationForm.js
import React, { useState } from 'react';
import '../styles/RegistrationForm.css';
import logo from "../images/form.png";
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const RegistrationForm = () => {

  let navigate = useNavigate();

  // SIGNUP API.
  const [signupCredentials, setSignupCredentials] = useState({
    name: '',
    email: '',
    password: '',
    // ageGroup: '',
    mobile: '',
    address: '',
    date_of_birth: '',
    country: '', // Use a dropdown for the country
    gender: 'male',
    college_name: '',
    uid: '',
    cgpa: '',
    degree: '',
    resume: null,

  });
  const onChange = (e) => {
    setSignupCredentials({ ...signupCredentials, [e.target.name]: e.target.value });
  }

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://scholarship-find.onrender.com/api/auth/createstudent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: signupCredentials.name,
          email: signupCredentials.email,
          mobile: signupCredentials.mobile,
          password: signupCredentials.password,
          address: signupCredentials.address,
          date_of_birth: signupCredentials.date_of_birth,
          country: signupCredentials.country,
          gender: signupCredentials.gender,
          college_name: signupCredentials.college_name,
          uid: signupCredentials.uid,
          cgpa: signupCredentials.cgpa,
          degree: signupCredentials.degree
        })
      });
      // console.log("HELLO");
      const json = await response.json()
      // console.log("HELLO");
      console.log(json);
      // console.log("HELLO");
      // console.log("HELLO");
      if (json.authToken) {
        // Save the authToken and Redirect.
        localStorage.setItem('token', json.authToken);
        navigate("/userdashboard");
        toast.success("Account Created Successfully");
      }
      else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }
  // const initialFormData = {
  //   name: '',
  //   email: '',
  //   password: '',
  //   ageGroup: '',
  //   mobile: '',
  //   address: '',
  //   dob: '',
  //   country: '', // Use a dropdown for the country
  //   gender: 'male',
  // };

  // const [academicData, setAcademicData] = useState({
  //   collegeName: '',
  //   uid: '',
  //   gpa: '',
  //   degree: '',
  //   resume: null,
  // });

  // const [formData, setFormData] = useState(initialFormData);

  // const onChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleFileUpload = (e) => {
  //   setAcademicData({
  //     ...academicData,
  //     resume: e.target.files[0],
  //   });
  // };

  // const handleClear = () => {
  //   setFormData(initialFormData); // Reset the form to initial values
  //   setAcademicData({
  //     collegeName: '',
  //     uid: '',
  //     gpa: '',
  //     degree: '',
  //     resume: null,
  //   });
  // };

  // const handlePersonalDetailsNext = (e) => {
  //   e.preventDefault();
  //   console.log('Personal Details:', formData);
  // };

  // const handleAcademicDetailsSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Academic Details:', academicData);
  // };

  return (
    <>
    <div style={{'marginBottom': '50px'}} className='container'>
      <div className='title'>
        {/* <img src={logo}></img> */}
        <h1>Registration Form </h1>
      </div>
      <div className="registration-form">
        {/* <h1>Personal Details</h1> */}
        {/* <hr className="horizontal-line" /> */}
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={signupCredentials.name}
              onChange={onChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={signupCredentials.email}
              onChange={onChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              defaultValue={signupCredentials.password}
              onChange={onChange}
              placeholder="Enter your password"
              required
            />
          </div>


          {/* <div>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="ageGroup"
            name="ageGroup"
            value={formData.ageGroup}
            onChange={onChange}
            placeholder="Enter your age "
            required
          />
        </div> */}
          <div>
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              defaultValue={signupCredentials.mobile}
              onChange={onChange}
              placeholder="Enter your mobile number"
              required
            />
          </div>

            <div>
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                defaultValue={signupCredentials.address}
                onChange={onChange}
                placeholder="Enter your address"
                required
              />
            </div>
            <div>
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="date_of_birth"
                defaultValue={signupCredentials.date_of_birth}
                onChange={onChange}
                placeholder="Select your date of birth"
                required
              />
            </div>
            {/* <div className='part1'></div> */}
            <div>
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                defaultValue={signupCredentials.country}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label>Gender</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    // checked={formData.gender === 'male'}
                    onChange={onChange}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    // checked={formData.gender === 'female'}
                    onChange={onChange}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    // checked={formData.gender === 'other'}
                    onChange={onChange}
                  />
                  Other
                </label>
              </div>
            </div>
          <div className="form-buttons">

            {/* <button className='clear' type="button" onClick={handleClear}>
                Clear
              </button> */}
          </div>
            <div>
              <label htmlFor="collegeName">College Name</label>
              <input
                className='inputtext'
                type="text"
                id="college_name"
                name="college_name"
                defaultValue={signupCredentials.college_name}
                onChange={onChange}
                placeholder="Enter your college name"
                required
              />
            </div>
            {/* Add other academic details fields (uid, gpa, degree, resume, etc.) here */}
            <div>
              <label htmlFor="uid">UID</label>
              <input
                type="text"
                id="uid"
                name="uid"
                defaultValue={signupCredentials.uid}
                onChange={onChange}
                placeholder="Enter your UID"
                required
              />
            </div>

            <div>
              <label htmlFor="gpa">GPA</label>
              <input
                type="text"
                id="cgpa"
                name="cgpa"
                defaultValue={signupCredentials.cgpa}
                onChange={onChange}
                placeholder="Enter your GPA"
                required
              />
            </div>
            <div>
              <label htmlFor="degree">Degree</label>
              <input
                type="text"
                id="degree"
                name="degree"
                defaultValue={signupCredentials.degree}
                onChange={onChange}
                placeholder="Enter your degree"
                required
              />
            </div>

          <div>
            <label htmlFor="resume">Upload Resume</label>
            <input type="file" id="resume" name="resume" required />
          </div>
          {/* <div className="form-buttons"> */}
            <button type="submit" style={{ 'borderRadius': '10px', 'padding': '15px' }} onClick={handleSignupSubmit}>Submit</button>
            {/* <button className='clear' type="button" onClick={handleClear}>
                Clear
              </button> */}
          {/* </div> */}
        </form>
      </div>
    </div>
      <Footer/>
    </>
  );
};
export default RegistrationForm;
