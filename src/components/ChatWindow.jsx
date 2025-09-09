import React, { useState } from "react";
import "./ChatWindow.css";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { text: input, user: true }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "This is an AI response.", user: false }]);
    }, 500);
  };

  return (
    <div className="chat-window">
      <h3>AI Support Chat</h3>
      <div className="chat-messages">
        {messages.map((m, idx) => (
          <div key={idx} className={`chat-message ${m.user ? "user" : "bot"}`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
