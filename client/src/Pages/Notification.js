import React, { useState, useEffect } from "react";
import "./notification.css";
import axios from "axios";

export default function Notification(props) {
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const studentid = url.searchParams.get("name");

  let [sch, setsch] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://scholarship-finder-updated.onrender.com/api/admin/admindata`,
        {
          headers: {
            "auth-token": localStorage.getItem("admintoken"),
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setsch(res.data.note);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <h3 className="m-b-50 heading-line" id="notification-heading">
          Notifications <i className="fa fa-bell text-muted" />
        </h3>
        <div className="notification-ui_dd-content">
          {sch
            .filter(
              (element) =>
                element.student === studentid && element.status === "Accepted"
            )
            .map((element) => (
              <div
                key={element.id}
                className="notification-list notification-list--unread"
              >
                <div className="notification-list_detail">
                  <p>
                    Your request for <b>{element.schname}</b> has been accepted
                  </p>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Unde, dolorem.
                  </p>
                  <p className="text-muted">
                    <small>10 mins ago</small>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
