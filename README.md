# ReactJS Routing with Login Protection

---

## 🧭 Overview
This project demonstrates how to build a multi-page React application using *React Router* with authentication-based route protection.  
Users can navigate between public and private pages, and only authenticated users can access protected routes like the dashboard.

---

## ✨ Features
- 🧩 Multi-page navigation using *react-router-dom*  
- 🔐 Protected routes that require login to access  
- 💾 Persistent login state using *localStorage*  
- 🎨 Simple and clean UI  
- ⚛ Built with React Hooks (*useState, **useEffect, **useNavigate*)

---

## 🧱 Topic Description
*Topic:* ReactJS Routing with Login Protection  
*Description:* Build a multi-page React app using React Router and protect routes with authentication logic.

---

## 🧰 Tech Stack
| Technology | Purpose |
|-------------|----------|
| *ReactJS* | Frontend framework |
| *React Router v6* | Client-side routing |
| *CSS* | Styling |
| *LocalStorage API* | Login state persistence |

---

## 📁 Project Structure
bash
react-login-protection/
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json

# 🧩 Code Explanation

---

## 🛣 Routing Setup
javascript
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

Routes and Route define the application's navigation structure.

---

## 🌍 Public Pages
javascript
function Home() { ... }
function About() { ... }
---

Accessible to all users.

---

## 🔒 Private Page (Protected)
javascript
function Dashboard() { ... }

Accessible only when logged in.

---

## 🧩 ProtectedRoute Component
javascript
function ProtectedRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

Redirects unauthenticated users to the /login page.

---

## 🧩 Authentication Logic
javascript
if (username === "admin" && password === "12345") {
  onLogin();
  navigate("/dashboard");
}

Checks user credentials and sets the login state in *localStorage* for session persistence.

---

## 🧪 Demo Credentials
| Username | Password |
|-----------|-----------|
| admin     | 12345     |

---

## 🧭 Navigation Flow
| Route       | Access  | Description        |
|--------------|----------|--------------------|
| /          | Public  | Home Page          |
| /about     | Public  | About Page         |
| /dashboard | Private | Requires Login     |
| /login     | Public  | Login Page         |

---

## 🧱 Example UI (Structure)
bash
MyApp
├── Home
├── About
├── Dashboard (Protected)
└── Login

## 🚀 Future Enhancements
- Add *JWT* or *Firebase* authentication  
- Integrate a *backend API*  
- Add *signup* and *password reset* functionality  
- Improve UI with frameworks like *TailwindCSS* or *Material UI*

---

## ⚖ License
This project is licensed under the *MIT License*.

---
