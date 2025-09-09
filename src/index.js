import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AutoProvider } from "./context/AutoContext";
import { ComplaintProvider } from "./context/ComplaintContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AutoProvider>
      <ComplaintProvider>
        <App />
      </ComplaintProvider>
    </AutoProvider>
  </React.StrictMode>
);

