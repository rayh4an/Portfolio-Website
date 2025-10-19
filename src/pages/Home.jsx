// src/pages/Home.jsx
export default function Home() {
  // works in dev and on GitHub Pages (adds /Portfolio-Website/ when needed)
  const base = import.meta.env.BASE_URL;
  const photo = base + "rayhaan.jpg";
  const resumeHref = base + "resume.pdf";

  return (
    <section className="hero">
      {/* Left: circular avatar with white ring */}
      <div className="hero-avatar" aria-hidden="true">
        <img src={photo} alt="Rayhaan portrait" />
      </div>

      {/* Right: text content */}
      <div className="hero-text">
        <h1 style={{ marginBottom: ".5rem" }}>
          Hello, I’m <span style={{ color: "#38bdf8" }}>Rayhaan</span>.
        </h1>

        <p style={{ maxWidth: 720, opacity: 0.9 }}>
          Welcome to my personal website and portfolio. I was a computer science student at
          Georgia State University who graduated summer 2025. This website showcases several
          projects I have completed. It also contains information on my work experience within
          the industry. I love software engineering &amp; development and I possess the required
          skills in order to thrive within this industry. I am highly proficient across full-stack
          development, and I believe I’d be a valuable asset within this industry.
        </p>

        <div className="hero-actions">
          <a className="btn" href="https://www.linkedin.com/in/rayh4an/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn" href="https://github.com/rayh4an" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn" href={resumeHref} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
