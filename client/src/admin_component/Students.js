import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function Students(props) {
  const [providerId, setProviderId] = useState("");
  const [userr, setUserr] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("admintoken");
    if (token) {
      const decodedToken = jwtDecode(token);
      // console.log(decodedToken);
      setProviderId(decodedToken.admin.id);
    }
  }, []);

  useEffect(() => {
    if (providerId) {
      axios
        .get(
          `https://scholarship-finder-updated.onrender.com/api/admin/admingetdata/${providerId}`,
          {
            headers: {
              "auth-token": localStorage.getItem("admintoken"),
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          setUserr(res.data.note);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error:", error);
          setLoading(false);
        });
    }
  }, [providerId]);

  const handlestatus = async (id, stat) => {
    let newStatus = stat === "Applied" ? "Accepted" : "Applied";
    try {
      const response = await axios.patch(
        `https://scholarship-finder-updated.onrender.com/api/admin/admindata/${id}`,
        { status: newStatus }
      );
      const updatedNote = response.data.noteupdated;

      setUserr((prevUserr) =>
        prevUserr.map((note) =>
          note._id === id ? { ...note, status: newStatus } : note
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Profile</th>
            <th>Course</th>
            <th>Scholarship Name</th>
            <th>GPA</th>
            <th>Contact</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {userr.map((dat) => (
            <tr key={dat._id}>
              <td>{dat.name}</td>
              <td>
                <Link to={`/profile?name=${dat.student}`}>
                  <button>Profile</button>
                </Link>
              </td>
              <td>{dat.degree}</td>
              <td>{dat.schname}</td>
              <td>{dat.cgpa}</td>
              <td>{dat.mobile}</td>
              <td>
                <button onClick={() => handlestatus(dat._id, dat.status)}>
                  {dat.status === "Accepted" ? "Accepted" : "Accept"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
