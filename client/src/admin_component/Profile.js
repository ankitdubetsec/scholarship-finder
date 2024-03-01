import React from 'react'
import './profile.css'

export default function Profile(props) {
    
    return (
        <div className='container'>
            <div className="student-profile py-4">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4">
                        <div className="card shadow-sm">
                        <div className="card-header bg-transparent text-center">
                            <img className="profile_img" src="images/profile.png" alt="student dp" />
                            <h3>Student</h3>
                        </div>
                        <div className="card-body">
                            <p className="mb-0"><strong className="pr-1">Student ID:</strong>321000001</p>
                            <p className="mb-0"><strong className="pr-1">Age:</strong>22</p>
                            <p className="mb-0"><strong className="pr-1">Degree:</strong>A</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div Name="card shadow-sm" className='profile-table'>
                        <div className="card-header bg-transparent border-0">
                            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>General Information</h3>
                        </div>
                        <div className="card-body pt-0">
                            <table className="table table-bordered">
                            <tr>
                                <th width="30%">Email</th>
                                <td width="2%">:</td>
                                <td>xyz@gmail.com</td>
                            </tr>
                            <tr>
                                <th width="30%">Academic Year:</th>
                                <td width="2%">:</td>
                                <td>2020</td>
                            </tr>
                            <tr>
                                <th width="30%">Gender</th>
                                <td width="2%">:</td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <th width="30%">College name:</th>
                                <td width="2%">:</td>
                                <td>XYZ College</td>
                            </tr>
                            <tr>
                                <th width="30%">GPA</th>
                                <td width="2%">:</td>
                                <td>B</td>
                            </tr>
                            </table>
                        </div>
                        </div>
                        <div style={{ height: '26px' }}></div>
                        <div className="card shadow-sm">
                        <div className="card-header bg-transparent border-0">
                            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Other Information</h3>
                        </div>
                        <div className="card-body pt-0">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
