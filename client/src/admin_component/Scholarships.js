import React, { useState, useEffect } from "react";
import "./notification.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const DangerButton = styled(Button)({
  borderColor: "red",
  color: "red",
  textTransform: "none", // Keep the text in its original case
  "&:hover": {
    borderColor: "darkred",
    color: "darkred",
  },
});

const ViewDetailsButton = styled(Button)({
  borderColor: "blue",
  color: "blue",
  textTransform: "none", // Keep the text in its original case
  "&:hover": {
    borderColor: "darkblue",
    color: "darkblue",
  },
});

export default function Scholarships(props) {
  let [sch, setsch] = useState([]);
  let [providerId, setproviderId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("admintoken"); // or wherever you store your JWT
    if (token) {
      const decodedToken = jwtDecode(token);
      setproviderId(decodedToken.admin.id); // replace with the correct field from your JWT
    }
  }, []);

  useEffect(() => {
    axios
      .post(`http://localhost:5000/api/scholorship/fetchscholorship`)
      .then((res) => {
        setsch(res.data.scholorship);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sch]);

  const handleDelete = async (id) => {
    // e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/scholorship/deletescholorship/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          params: id,
        }
      );
      // console.log("HELLO");
      const json = await response.json();
      // navigate("/adminscholarships");
      console.log(json);
    } catch (error) {
      console.error("Something went wrong");
    }
  };
  return (
    <div style={{ marginBottom: "25px" }}>
      <div className="container">
        <h3 className="m-b-50 heading-line" id="notification-heading">
          Scholarships <i className="fa fa-bell text-muted" />
        </h3>
        <div className="notification-ui_dd-content">
          {sch
            .filter((element) => element.provider === providerId)
            .reverse() // Reverse the array to show the last element first
            .map((element) => (
              <div
                key={element.id}
                className="notification-list notification-list--unread"
                style={{ position: "relative" }}
              >
                <div className="notification-list_detail">
                  <h3>
                    <b>{element.title}</b>
                  </h3>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Unde, dolorem.
                  </p>
                  <p className="text-muted">
                    <small>10 mins ago</small>
                  </p>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                    }}
                  >
                    <ViewDetailsButton variant="outlined">
                      View Details
                    </ViewDetailsButton>
                    <DangerButton
                      variant="outlined"
                      color="error"
                      style={{ marginLeft: "10px" }}
                      onClick={() => handleDelete(element._id)}
                    >
                      Delete
                    </DangerButton>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
