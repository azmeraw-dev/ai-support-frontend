import React, { useState, useContext } from "react";
import { ComplaintContext } from "../context/ComplaintContext";

function ComplaintForm() {
  const { addComplaint } = useContext(ComplaintContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addComplaint({ name, phone, service, complaint });
    setName(""); setPhone(""); setService(""); setComplaint("");
    alert("Complaint submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Full Name
        <input value={name} onChange={e => setName(e.target.value)} required />
      </label>
      <label>Phone / Telebirr ID
        <input value={phone} onChange={e => setPhone(e.target.value)} required />
      </label>
      <label>Service
        <input value={service} onChange={e => setService(e.target.value)} required />
      </label>
      <label>Complaint Details
        <textarea value={complaint} onChange={e => setComplaint(e.target.value)} required />
      </label>
      <button type="submit">Submit Complaint</button>
    </form>
  );
}

export default ComplaintForm;
