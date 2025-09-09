import React from "react";

const Dashboard = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ color: "#007a33" }}>Welcome to the AI-Powered Customer Support System</h2>
      <p style={{ marginTop: "1rem", fontSize: "1rem" }}>
        Use the sidebar to navigate between <strong>Customers</strong>, <strong>Tickets</strong>, <strong>Reports</strong>, and <strong>Submit Complaints</strong>.
      </p>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 200, padding: "1rem", background: "#FFCD00", color: "#007a33", borderRadius: 8, fontWeight: "bold", textAlign: "center" }}>
          Total Customers: 120
        </div>
        <div style={{ flex: 1, minWidth: 200, padding: "1rem", background: "#FFCD00", color: "#007a33", borderRadius: 8, fontWeight: "bold", textAlign: "center" }}>
          Open Tickets: 15
        </div>
        <div style={{ flex: 1, minWidth: 200, padding: "1rem", background: "#FFCD00", color: "#007a33", borderRadius: 8, fontWeight: "bold", textAlign: "center" }}>
          Resolved Tickets: 85
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
