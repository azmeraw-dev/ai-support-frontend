import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Tickets from "./pages/Tickets";
import Reports from "./pages/Reports";
import ComplaintForm from "./pages/ComplaintForm";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-layout">
          <Sidebar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/complaint" element={<ComplaintForm />} />
            </Routes>
          </div>
          <ChatWindow />
        </div>
      </div>
    </Router>
  );
}

export default App;
