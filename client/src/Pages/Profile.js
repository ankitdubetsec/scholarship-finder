import React, { useState, useEffect } from 'react'
import './profile.css'
import Footer from '../components/Footer';
import { useLocation, useParams } from 'react-router-dom';

export default function Profile(props) {
   // Get the URL of the current page
const currentUrl = window.location.href;

// Create a URL object
const url = new URL(currentUrl);

// Get the value of the 'abc' parameter
const studentid = url.searchParams.get('name');

console.log(studentid); // Output: @abc

    // var abcFromUrl = Request.QueryString["abc"] ?? string.Empty;
    // console.log(abcFromUrl)
    //const { state } = props.location;
    // const studentData = props.location.state.studentData;
    // console.log(studentData)
//     const { state } = props.location;
//  const { name, age } = state;
 
 //console.log(state)
//  const { handle } = useParams();
//     const location = useLocation();
//     const { state } = location;

//     // Check if location.state exists before destructuring 'x'
//     const x = state ? state.x : null;
//     console.log(x);
    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                // API call.
                const response = await fetch(`https://scholarship-find.onrender.com/api/auth/getstudent/${studentid}`, {
                    method: "POST",
                    // headers: {
                    //     "Content-Type": "application/json",
                    //     "auth-token": localStorage.getItem('token')
                    // },
                });

                const userData = await response.json();
                setUser(userData); // Update the user state with the fetched data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData(); // Call the fetchData function inside useEffect
    }, []);
console.log(user)



    return (

        <div className='container'>
            <div className="student-profile py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4" >
                            <div className="card shadow-sm" style={{width:'220px'}}>
                                <div className="card-header bg-transparent text-center">
                                    <img className="profile_img" src="images/profile.png" alt="student dp" />
                                    <h3>{user.name}</h3>
                                </div>
                                <div className="card-body">
                                    <p className="mb-0"><strong className="pr-1">Student ID:</strong>{user.uid}</p>
                                    <p className="mb-0"><strong className="pr-1">DOB:</strong>{user.date_of_birth}</p>
                                    {/* <p className="mb-0"><strong className="pr-1">Degree:</strong>A</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div Name="card shadow-sm" className='profile-table'>
                                <div className="card-header bg-transparent border-0">
                                    <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Student Information</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <table className="table table-bordered">
                                        {/* <tr>
                                            <th width="30%">UID No.</th>
                                            <td width="2%">:</td>
                                            <td>{user.uid}</td>
                                        </tr> */}
                                        <tr>
                                            <th width="30%">College name</th>
                                            <td width="2%">:</td>
                                            <td>{user.college_name}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Degree</th>
                                            <td width="2%">:</td>
                                            <td>{user.degree}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">GPA</th>
                                            <td width="2%">:</td>
                                            <td>{user.cgpa}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Mobile</th>
                                            <td width="2%">:</td>
                                            <td>{user.mobile}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Email</th>
                                            <td width="2%">:</td>
                                            <td>{user.email}</td>
                                        </tr>
                                        {/* <tr>
                                            <th width="30%">Date of Birth</th>
                                            <td width="2%">:</td>
                                            <td>{user.date_of_birth}</td>
                                        </tr> */}
                                        <tr>
                                            <th width="30%">Gender</th>
                                            <td width="2%">:</td>
                                            <td>{user.gender}</td>
                                        </tr>




                                    </table>
                                </div>
                            </div>
                            {/* <div style={{ height: '26px' }}></div>
                            <div className="card shadow-sm">
                                <div className="card-header bg-transparent border-0">
                                    <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Other Information</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}