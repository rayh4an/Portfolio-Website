// src/App.jsx
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Education from "./pages/Education.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";

export default function App() {
  return (
    <div
      className="layout"
      style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}
    >
      {/* Top nav */}
      <header className="site-header">
        <div className="container">
          <nav>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : undefined)}>
              Home
            </NavLink>
            <NavLink to="/education" className={({ isActive }) => (isActive ? "active" : undefined)}>
              Education
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : undefined)}>
              Projects
            </NavLink>
            <NavLink to="/experience" className={({ isActive }) => (isActive ? "active" : undefined)}>
              Experience
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Page content */}
      <main className="container" style={{ padding: "1rem 0", flex: "1 0 auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer pinned to bottom (no line) */}
      <footer
        className="site-footer"
        style={{ marginTop: "auto", padding: "2rem 0", border: 0, opacity: 0.9 }}
      >
        <div className="container">© 2025 Rayhaan Mohamed</div>
      </footer>
    </div>
  );
}

