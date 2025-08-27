import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("landing");
  const [messages, setMessages] = useState([{ sender: "ai", text: "Hello! How can I help you today?" }]);
  const [complaints, setComplaints] = useState([]);
  const [chatInput, setChatInput] = useState(""); // ← move here

  const handleSend = (msg) => {
    if (!msg.trim()) return;
    setMessages([...messages, { sender: "user", text: msg }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "ai", text: "This is a mock AI reply." }]);
    }, 500);
  };

  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newComplaint = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      description: formData.get("description"),
      status: "Pending",
    };
    setComplaints([...complaints, newComplaint]);
    e.target.reset();
    alert("Complaint submitted successfully!");
  };

  if (page === "landing") {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-800">AI-Powered Customer Support</h1>
        <div className="flex flex-col gap-3">
          <button onClick={() => setPage("chat")} className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">Chat with AI</button>
          <button onClick={() => setPage("complaint")} className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">Submit Complaint</button>
          <button onClick={() => setPage("admin")} className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition">Admin Dashboard</button>
        </div>
      </div>
    );
  }

  if (page === "chat") {
    return (
      <div className="flex flex-col h-screen bg-gray-50">
        <div className="flex justify-between p-4 bg-blue-600 text-white">
          <h2 className="text-xl font-bold">Chatbot</h2>
          <button onClick={() => setPage("landing")} className="underline hover:text-gray-200">Back</button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((m, i) => (
            <div key={i} className={`mb-2 ${m.sender === "user" ? "text-right" : "text-left"}`}>
              <span className={`inline-block px-4 py-2 rounded-xl max-w-xs break-words ${m.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>{m.text}</span>
            </div>
          ))}
        </div>
        <div className="p-4 flex gap-2 border-t">
          <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Type a message..." className="flex-1 border rounded-lg p-2" />
          <button onClick={() => { handleSend(chatInput); setChatInput(""); }} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Send</button>
        </div>
      </div>
    );
  }

  if (page === "complaint") {
    return (
      <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-xl mt-10">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Submit a Complaint</h2>
        <form onSubmit={handleComplaintSubmit} className="space-y-4">
          <input name="name" placeholder="Your Name" required className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
          <input name="phone" placeholder="Phone Number" required className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
          <select name="service" className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400">
            <option>Internet</option>
            <option>Mobile</option>
            <option>Telebirr</option>
          </select>
          <textarea name="description" placeholder="Describe your issue" required className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"></textarea>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-700 transition">Submit</button>
        </form>
        <button onClick={() => alert('Redirecting to Telebirr payment mock...')} className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition">Pay with Telebirr</button>
        <button onClick={() => setPage("landing")} className="mt-2 text-blue-600 underline hover:text-blue-800 w-full">Back</button>
      </div>
    );
  }

  if (page === "admin") {
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
          <button onClick={() => setPage("landing")} className="text-blue-600 underline hover:text-blue-800">Back</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 shadow-md">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Service</th>
                <th className="border p-2">Issue</th>
                <th className="border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {complaints.length === 0 ? (
                <tr><td colSpan="5" className="text-center p-4">No complaints yet</td></tr>
              ) : (
                complaints.map((c, i) => (
                  <tr key={i} className="hover:bg-gray-100">
                    <td className="border p-2">{c.name}</td>
                    <td className="border p-2">{c.phone}</td>
                    <td className="border p-2">{c.service}</td>
                    <td className="border p-2 max-w-xs break-words">{c.description}</td>
                    <td className="border p-2">{c.status}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;

