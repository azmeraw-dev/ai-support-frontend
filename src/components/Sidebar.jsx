import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/tickets">Tickets</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/complaint">Submit Complaint</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
