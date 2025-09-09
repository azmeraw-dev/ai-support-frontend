import React, { useContext } from "react";
import { AutoContext } from "../context/AutoContext";

const Customers = () => {
  const { customers } = useContext(AutoContext);

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "1rem"
  };

  const thStyle = { background: "#007a33", color: "#FFCD00", padding: "0.5rem", textAlign: "left" };
  const tdStyle = { border: "1px solid #ddd", padding: "0.5rem" };

  return (
    <div>
      <h2 style={{ color: "#007a33" }}>Customers List</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Phone</th>
            <th style={thStyle}>Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td style={tdStyle}>{c.id}</td>
              <td style={tdStyle}>{c.name}</td>
              <td style={tdStyle}>{c.phone}</td>
              <td style={tdStyle}>{c.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
