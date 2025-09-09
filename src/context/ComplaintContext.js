import React, { createContext, useState } from "react";

export const ComplaintContext = createContext();

export function ComplaintProvider({ children }) {
  const [complaints, setComplaints] = useState([]);

  const addComplaint = complaint => {
    setComplaints([...complaints, { ...complaint, id: complaints.length + 1, status: "Open" }]);
  };

  const updateComplaintStatus = (id, status) => {
    setComplaints(complaints.map(c => c.id === id ? { ...c, status } : c));
  };

  return (
    <ComplaintContext.Provider value={{ complaints, addComplaint, updateComplaintStatus }}>
      {children}
    </ComplaintContext.Provider>
  );
}
