import React, { useState, useContext } from "react";
import { ComplaintContext } from "../context/ComplaintContext";

const ComplaintForm = () => {
  const { addComplaint } = useContext(ComplaintContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [complaint, setComplaint] = useState("");

  const inputStyle = {
    padding: "0.6rem",
    borderRadius: 6,
    border: "1px solid #ccc",
    marginBottom: "0.8rem",
    width: "100%",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    padding: "0.6rem 1rem",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    background: "#FFCD00",
    color: "#007a33",
    fontWeight: "bold",
    transition: "0.3s",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComplaint({ name, phone, complaint });
    setName(""); setPhone(""); setComplaint("");
    alert("Complaint submitted successfully!");
  };

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", background: "#fff", padding: "2rem", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <h2 style={{ color: "#007a33", marginBottom: "1rem" }}>Submit a Complaint</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ marginBottom: "0.3rem" }}>Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={inputStyle}
          required
        />

        <label style={{ marginBottom: "0.3rem" }}>Phone / Telebirr ID</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone or ID"
          style={inputStyle}
          required
        />

        <label style={{ marginBottom: "0.3rem" }}>Complaint Details</label>
        <textarea
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          placeholder="Describe your issue"
          style={{ ...inputStyle, height: 100 }}
          required
        />

        <button type="submit" style={buttonStyle} onMouseOver={(e)=>e.target.style.background="#007a33"} onMouseOut={(e)=>e.target.style.background="#FFCD00"}>
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default ComplaintForm;
