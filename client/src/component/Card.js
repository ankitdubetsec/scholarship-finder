import React, { useState, useEffect } from "react";
import axios from "axios";
import './cardstyle.css'

function Card(props) {
  const [sch, setsch] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://scholarship-find.onrender.com/api/scholorship/fetchscholorship", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const json = await response.json();
        setsch(json);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (title) => {
    try {
      await axios.post('https://scholarship-find.onrender.com/api/admin/admindata', {
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
      });
      console.log("Posted successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  const cardss = sch.scholorship ? sch.scholorship.map((element) => (
    <div key={element._id} className="card">
      <div className="card-title">{element.title}</div>
      <div className="card-details">
        <div>Deadline: <span>{element.date}</span></div>
        <div>Funds: <span>{element.funds}</span></div>
        <div><i className="fa-solid fa-location-dot"></i> {element.location}</div>
        <button onClick={() => handleSubmit(element.title)}>
          {props.user.status && element._id === props.user.key ? "Accepted" : "Apply Now"}
        </button>
      </div>
    </div>
  )) : null;

  return <div className="card-container">{cardss}</div>;
}

export default Card;
