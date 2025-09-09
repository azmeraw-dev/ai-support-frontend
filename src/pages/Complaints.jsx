import React, { useContext, useState } from "react";
import { ComplaintContext } from "../context/ComplaintContext";

const Complaints = () => {
  const { complaints, updateComplaintStatus } = useContext(ComplaintContext);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const buttonStyle = {
    padding: "0.4rem 0.8rem",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    background: "#FFCD00",
    color: "#007a33",
    fontWeight: "bold",
    marginRight: "0.5rem",
    transition: "0.3s",
  };

  const handleView = (complaint) => {
    setSelectedComplaint(complaint);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedComplaint(null);
    setShowModal(false);
  };

  const handleResolve = (id) => {
    updateComplaintStatus(id, "Resolved");
    handleClose();
  };

  return (
    <div>
      <h2 style={{ color: "#007a33" }}>All Complaints</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Complaint</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>{c.complaint}</td>
              <td>{c.status}</td>
              <td>
                <button
                  style={buttonStyle}
                  onClick={() => handleView(c)}
                >
                  View
                </button>
                {c.status !== "Resolved" && (
                  <button
                    style={{ ...buttonStyle, background: "#007a33", color: "#FFCD00" }}
                    onClick={() => handleResolve(c.id)}
                  >
                    Resolve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && selectedComplaint && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Complaint Details</h3>
            <p><strong>ID:</strong> {selectedComplaint.id}</p>
            <p><strong>Name:</strong> {selectedComplaint.name}</p>
            <p><strong>Phone:</strong> {selectedComplaint.phone}</p>
            <p><strong>Complaint:</strong> {selectedComplaint.complaint}</p>
            <p><strong>Status:</strong> {selectedComplaint.status}</p>
            <div style={{ marginTop: "1rem" }}>
              <button
                style={buttonStyle}
                onClick={handleClose}
              >
                Close
              </button>
              {selectedComplaint.status !== "Resolved" && (
                <button
                  style={{ ...buttonStyle, background: "#007a33", color: "#FFCD00" }}
                  onClick={() => handleResolve(selectedComplaint.id)}
                >
                  Mark as Resolved
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Complaints;
