import './styles/global.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Tickets from "./pages/Tickets";
import Reports from "./pages/Reports";
import ComplaintForm from "./components/ComplaintForm";
import Login from "./pages/Login";
import ChatWindow from "./components/ChatWindow";
import { ComplaintProvider } from "./context/ComplaintContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ComplaintProvider>
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
                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
              <ChatWindow />
            </div>
          </div>
        </Router>
      </ComplaintProvider>
    </AuthProvider>
  );
}

export default App;

                  