import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"; // Use named import
import ContactImg from "../images/contact.jpg";
import { useNavigate } from "react-router-dom";
function Create() {
  let navigate = useNavigate();
  const [scholarship, setScholarship] = useState({
    title: "",
    degrees: "",
    funds: "",
    date: "",
    location: "",
    description: "",
    eligibilityCriteria: "",
    benefits: "",
    provider: "", // This will be set from the JWT token
  });

  useEffect(() => {
    const token = localStorage.getItem("admintoken"); // or wherever you store your JWT
    if (token) {
      const decodedToken = jwtDecode(token);
      const providerId = decodedToken.admin.id; // replace with the correct field from your JWT
      setScholarship((prev) => ({ ...prev, provider: providerId }));
    }
  }, []);

  const onChange = (e) => {
    setScholarship({
      ...scholarship,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://scholarship-finder-updated.onrender.com/api/scholorship/createscholorship`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(scholarship),
        }
      );
      // console.log("HELLO");
      const json = await response.json();
      navigate("/adminscholarships");
      console.log(json);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div style={{ display: "flex", height: "calc(100vh - 70px)" }}>
      <div
        style={{
          flex: 1,
          backgroundImage: `url(${ContactImg})`,
          backgroundSize: "cover",
          height: "100%",
        }}
      ></div>
      <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        <h1 style={{ textAlign: "center" }}>Create Scholarship</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            placeholder="Enter title of scholarship program"
            type="text"
            value={scholarship.title}
            onChange={onChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />

          <label htmlFor="degrees">Degrees</label>
          <input
            name="degrees"
            placeholder="Enter degrees"
            type="text"
            value={scholarship.degrees}
            onChange={onChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />

          <label htmlFor="funds">Funds</label>
          <input
            name="funds"
            placeholder="Enter funds"
            type="text"
            value={scholarship.funds}
            onChange={onChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />

          <label htmlFor="date">Date</label>
          <input
            name="date"
            placeholder="Enter date"
            type="text"
            value={scholarship.date}
            onChange={onChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />

          <label htmlFor="location">Location</label>
          <input
            name="location"
            placeholder="Enter location"
            type="text"
            value={scholarship.location}
            onChange={onChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />

          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            placeholder="Enter description"
            rows="4"
            value={scholarship.description}
            onChange={onChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />

          <label htmlFor="eligibilityCriteria">Eligibility Criteria</label>
          <textarea
            name="eligibilityCriteria"
            placeholder="Enter eligibility criteria"
            rows="4"
            value={scholarship.eligibilityCriteria}
            onChange={onChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />

          <label htmlFor="benefits">Benefits</label>
          <textarea
            name="benefits"
            placeholder="Enter benefits"
            rows="4"
            value={scholarship.benefits}
            onChange={onChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />

          <button type="submit" style={{ width: "100%" }}>
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
