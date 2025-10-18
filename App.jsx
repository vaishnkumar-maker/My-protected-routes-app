import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  return (
    <div className="page">
      <h2>🏠 Home Page - Public</h2>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h2>ℹ About Page - Public</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="page">
      <h2>📊 Dashboard - Private (Only for logged-in users)</h2>
    </div>
  );
}

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const demoUser = "admin";
    const demoPass = "12345";

    if (username === demoUser && password === demoPass) {
      onLogin();
      navigate("/dashboard");
    } else {
      alert("❌ Invalid username or password!");
    }
  };

  return (
    <div className="page">
      <div className="login-card">
        <h2>🔐 Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="hint">🧠 Hint: <b>You</b></p>
      </div>
    </div>
  );
}

function ProtectedRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("isLoggedIn") === "true");

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <Router>
      {/* Global Styles */}
      <style>{`
        * {
          box-sizing: border-box;
        }
        body, html {
          margin: 0;
          padding: 0;
          height: 100%;
          font-family: "Poppins", sans-serif;
          background: #f4f6f9;
          color: #333;
          overflow-x: hidden;
        }
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
          background: #001030;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 24px;
          z-index: 1000;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }
        .nav-logo {
          font-weight: 600;
          font-size: 1.3rem;
          white-space: nowrap;
        }
        .nav-links {
          display: flex;
          gap: 14px;
          align-items: center;
          flex-wrap: wrap;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 6px;
          transition: background 0.3s;
          white-space: nowrap;
        }
        .nav-links a:hover {
          background: #24305e;
        }
        .login-btn {
          background: #0078ff;
          padding: 6px 14px;
          border-radius: 8px;
          font-weight: 500;
        }
        .logout-btn {
          background: #ff4b5c;
          color: white;
          border: none;
          padding: 6px 14px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.3s;
        }
        .logout-btn:hover {
          background: #e43f4a;
        }
        .page {
          position: relative;
          width: 100vw;
          min-height: calc(100vh - 60px);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
          padding-top: 60px;
          margin: 0 auto;
          box-sizing: border-box;
          animation: fadeIn 0.6s ease-in-out;
        }
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          min-height: calc(100vh - 60px);
          width: 100%;
          padding-top: 60px;
          background: linear-gradient(135deg, #eef2ff, #f8faff);
        }
        .login-card {
          background: white;
          padding: 30px 40px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 340px;
        }
        .login-card h2 {
          margin-bottom: 20px;
          color: #001030;
        }
        .login-card form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .login-card input {
          padding: 12px 14px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background: #eef2ff;
          color: #001030;
          transition: all 0.3s ease;
        }
        .login-card input:focus {
          background: #e6ecff;
          border-color: #0078ff;
          outline: none;
          box-shadow: 0 0 0 3px rgba(0, 120, 255, 0.2);
        }
        .login-card button {
          background: #0078ff;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.3s;
        }
        .login-card button:hover {
          background: #005fcc;
        }
        .hint {
          margin-top: 10px;
          font-size: 0.9rem;
          color: #555;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            align-items: center;
            height: auto;
            padding: 10px 16px;
          }
          .nav-links {
            justify-content: center;
            gap: 10px;
          }
          .page,
          .login-container {
            padding-top: 100px;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-logo">🌐 MyApp</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
          {!isLoggedIn ? (
            <Link to="/login" className="login-btn">Login</Link>
          ) : (
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          )}
        </div>
      </nav>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
