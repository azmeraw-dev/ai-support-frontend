import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/tickets">Tickets</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/complaint">Submit Complaint</Link></li>
        <li><Link to="/complaints">View Complaints</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

