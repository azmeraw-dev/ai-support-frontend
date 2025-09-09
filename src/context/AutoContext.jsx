import React, { createContext, useState } from "react";

export const AutoContext = createContext();

export const AutoProvider = ({ children }) => {
  const [customers, setCustomers] = useState([
    { id: 1, name: "Azmeraw", phone: "0911522796", email: "azmeraw@gmail.com" },
    { id: 2, name: "habtamu", phone: "0923456789", email: "habtamu@gmail.com" },
  ]);

  return (
    <AutoContext.Provider value={{ customers }}>
      {children}
    </AutoContext.Provider>
  );
};
