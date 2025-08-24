/*import React from "react";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
*/

// src/App.jsx
import { useState } from "react";
import "./App.css";

const VALID_CREDENTIALS = [
  { username: "rraj", password: "rrajrraj" },
  { username: "montecarlo", password: "montecarlo" },
  { username: "feliperrO", password: "lolitateamO" },
  { username: "rojo", password: "gora" },
  { username: "3g5lr2", password: "riov1r" },
  { username: "95gg65", password: "gool49" },
  { username: "yuog5o", password: "rg023o" },
  { username: "2lrr93", password: "0u7tg8" },
  { username: "itr5k5", password: "v7k1ui" },
  { username: "b58yu8", password: "57tyt9" },
];

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    const valid = VALID_CREDENTIALS.find(
      (cred) => cred.username === username && cred.password === password
    );

    if (valid) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <div className="login-box">
          <h2>Anmeldung</h2>
          <label>Benutzer:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Passwort:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Anmeldeprotokoll</button>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div id="content" className="content-container">
      <h1>Bienvenido 🎉</h1>
      <p>Aquí va todo el contenido de tu proyecto React.</p>
    </div>
  );
}

export default App;
