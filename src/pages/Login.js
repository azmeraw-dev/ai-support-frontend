import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/tickets");
    } else {
      setError("Invalid credentials!");
    }
  };

  return (
    <div>
      <h1>Staff Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        {error && <p style={{color: "red"}}>{error}</p>}
        <label>Username
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
        </label>
        <label>Password
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
