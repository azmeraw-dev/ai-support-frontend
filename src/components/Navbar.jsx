import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav>
      <span>Ethio Telecom AI Support</span>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <span>Not logged in</span>
      )}
    </nav>
  );
}

export default Navbar;
