// src/components/Dashboard.js
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [scholarships, setScholarships] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [upcomingDeadlines, setUpcomingDeadlines] = useState([]);

  // Dummy data for the dashboard
  useEffect(() => {
    const dummyScholarships = [
      { title: "Scholarship A", amount: 1000, deadline: "2023-12-01" },
      { title: "Scholarship B", amount: 2000, deadline: "2023-11-15" },
      { title: "Scholarship C", amount: 1500, deadline: "2023-12-20" },
    ];

    setScholarships(dummyScholarships);
    setTotalAmount(
      dummyScholarships.reduce(
        (sum, scholarship) => sum + scholarship.amount,
        0
      )
    );
    setUpcomingDeadlines(
      dummyScholarships.map((scholarship) => scholarship.deadline)
    );
  }, []);

  const styles = {
    dashboard: {
      padding: "20px",
      backgroundColor: "#f9f9f9",
    },
    stats: {
      display: "flex",
      gap: "20px",
    },
    stat: {
      backgroundColor: "white",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      flex: 1,
    },
    statHeader: {
      margin: 0,
      fontSize: "1.2em",
    },
    statValue: {
      margin: "10px 0 0",
      fontSize: "2em",
      color: "#007bff",
    },
    statList: {
      listStyleType: "none",
      padding: 0,
    },
    statListItem: {
      margin: "5px 0",
    },
  };

  return (
    <div style={styles.dashboard}>
      <h2>Dashboard</h2>
      <div style={styles.stats}>
        <div style={styles.stat}>
          <h3 style={styles.statHeader}>Total Scholarships</h3>
          <p style={styles.statValue}>{scholarships.length}</p>
        </div>
        <div style={styles.stat}>
          <h3 style={styles.statHeader}>Total Amount</h3>
          <p style={styles.statValue}>${totalAmount}</p>
        </div>
        <div style={styles.stat}>
          <h3 style={styles.statHeader}>Upcoming Deadlines</h3>
          <ul style={styles.statList}>
            {upcomingDeadlines.map((deadline, index) => (
              <li key={index} style={styles.statListItem}>
                {deadline}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
