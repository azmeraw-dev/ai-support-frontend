import React from "react";
import "./TicketCard.css";

function TicketCard({ ticket }) {
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <span>Status: {ticket.status}</span>
    </div>
  );
}

export default TicketCard;
