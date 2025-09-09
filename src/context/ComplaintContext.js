import React, { createContext, useState } from "react";

export const ComplaintContext = createContext();

export const ComplaintProvider = ({ children }) => {
  const [complaints, setComplaints] = useState([
    { id: 1, name: "John Doe", phone: "0912345678", complaint: "Internet not working", status: "Open" },
    { id: 2, name: "Jane Smith", phone: "0923456789", complaint: "Billing issue", status: "Open" },
  ]);

  const addComplaint = (c) => {
    setComplaints([...complaints, { ...c, id: complaints.length + 1, status: "Open" }]);
  };

  const updateComplaintStatus = (id, status) => {
    setComplaints(complaints.map((c) => (c.id === id ? { ...c, status } : c)));
  };

  return (
    <ComplaintContext.Provider value={{ complaints, addComplaint, updateComplaintStatus }}>
      {children}
    </ComplaintContext.Provider>
  );
};
