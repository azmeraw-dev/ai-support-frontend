import React from "react";

const Tickets = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ color: "#007a33" }}>Tickets Management</h2>
      <p style={{ marginTop: "1rem" }}>
        Manage and monitor customer tickets here. This section will allow you to <strong>view, assign, and resolve tickets</strong> efficiently.
      </p>
      <div style={{ marginTop: "2rem", padding: "1rem", background: "#FFCD00", borderRadius: 8 }}>
        <p style={{ color: "#007a33", fontWeight: "bold" }}>No tickets to display (coming soon...)</p>
      </div>
    </div>
  );
};

export default Tickets;
