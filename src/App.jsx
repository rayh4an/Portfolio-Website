import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";

export default function App() {
  return (
    <>
      {/* Sticky top nav */}
      <header className="site-header">
        <div className="container">
          <nav>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Projects
            </NavLink>
            <NavLink to="/experience"
            className={({ isActive }) => (isActive ? "active" : undefined)}>
              Experience
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Page content */}
      <main className="container" style={{ padding: "1rem 0" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="container" style={{ padding: "2rem 0", opacity: 0.75 }}>
        © {new Date().getFullYear()} Rayhaan Mohamed
      </footer>

      
    </>
  );
}
