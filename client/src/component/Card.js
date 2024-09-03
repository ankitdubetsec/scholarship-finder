import React, { useState, useEffect } from "react";
import axios from "axios";
import "./cardstyle.css";
import "./loading.css";
function Card(props) {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [appliedScholarships, setAppliedScholarships] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://scholarship-finder-updated.onrender.com/api/scholorship/fetchscholorship",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const json = await response.json();
        setScholarships(json.scholorship);
        setLoading(false);
        // Fetch applied scholarships for the current user
        const appliedResponse = await axios.get(
          `https://scholarship-finder-updated.onrender.com/api/admin/admingetdata/${props.userr._id}`,
          {
            headers: {
              "auth-token": localStorage.getItem("admintoken"),
              "Content-Type": "application/json",
            },
          }
        );
        const appliedData = appliedResponse.data.note.reduce((acc, curr) => {
          acc[curr.schname] = curr.status;
          return acc;
        }, {});
        setAppliedScholarships(appliedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [props.userr._id]);

  const handleSubmit = async (title, provId, id) => {
    console.log("prop:", props);
    try {
      await axios.post(
        "https://scholarship-finder-updated.onrender.com/api/admin/admindata",
        {
          schname: title,
          student: props.userr._id,
          name: props.userr.name,
          mobile: props.userr.mobile,
          date_of_birth: props.userr.date_of_birth,
          address: props.userr.address,
          country: props.userr.country,
          gender: props.userr.gender,
          college_name: props.userr.college_name,
          uid: props.userr.uid,
          cgpa: props.userr.cgpa,
          degree: props.userr.degree,
          status: "Applied",
          provider: provId ? provId : null,
        }
      );
      console.log("Posted successfully");

      // Update the appliedScholarships state
      setAppliedScholarships((prev) => ({
        ...prev,
        [title]: "Applied",
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  const cardss = scholarships.map((element) => (
    <div key={element._id} className="card">
      <div className="card-title">{element.title}</div>
      <div className="card-details">
        <div style={{ paddingBottom: "5px" }}>
          Deadline: <span>{element.date}</span>
        </div>
        <div style={{ paddingBottom: "5px" }}>
          Funds: <span>{element.funds}</span>
        </div>
        <div style={{ paddingBottom: "5px" }}>
          <i className="fa-solid fa-location-dot"></i> {element.location}
        </div>
        <button
          onClick={() =>
            handleSubmit(element.title, element.provider, element._id)
          }
          style={{ position: "relative", left: "700px" }}
        >
          {appliedScholarships[element.title] === "Applied"
            ? "Applied"
            : appliedScholarships[element.title] === "Accepted"
            ? "Accepted"
            : "Apply Now"}
        </button>
      </div>
    </div>
  ));

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }
  return <div className="card-container">{cardss}</div>;
}

export default Card;
