import React, { useContext } from "react";
import { ComplaintContext } from "../context/ComplaintContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Tickets() {
  const { complaints, updateComplaintStatus } = useContext(ComplaintContext);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/login");
    return null;
  }

  return (
    <div>
      <h1>Tickets / Complaints</h1>
      {complaints.length === 0 ? (
        <p>No complaints submitted yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Complaint</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map(c => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.phone}</td>
                <td>{c.service}</td>
                <td>{c.complaint}</td>
                <td>{c.status}</td>
                <td>
                  <select value={c.status} onChange={e => updateComplaintStatus(c.id, e.target.value)}>
                    <option value="Open">Open</option>
                    <option value="Pending">Pending</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Tickets;
