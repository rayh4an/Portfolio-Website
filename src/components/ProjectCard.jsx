// src/components/ProjectCard.jsx
export default function ProjectCard({
  title,
  desc,
  bullets = [],
  tech = [],
  links = {},
  images = [],        // optional: array of public paths
  imgLayout = "strip",// optional: "strip" (default) or "grid-quad"
  imageAlt,           // optional alt text
}) {
  const { demo, code } = links;

  // Robust public-path resolver (works on GitHub Pages with Vite)
  const base = (import.meta && import.meta.env && import.meta.env.BASE_URL) || "/";
  const makeSrc = (s) => {
    if (!s) return "";
    const clean = s.startsWith("/") ? s.slice(1) : s; // avoid double slash
    return `${base}${encodeURI(clean)}`;
  };

  return (
    <article className="card">
      <h3 style={{ marginTop: 0 }}>{title}</h3>

      {desc && <p style={{ opacity: 0.9 }}>{desc}</p>}

      {bullets.length > 0 && (
        <ul className="proj-bullets">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}

      {tech.length > 0 && (
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", margin: ".75rem 0" }}>
          {tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      )}

      <div className="card-actions" style={{ display: "flex", gap: "0.75rem" }}>
        {code && (
          <a className="btn" href={code} target="_blank" rel="noreferrer">Project Repository</a>
        )}
        {demo && (
          <a className="btn" href={demo} target="_blank" rel="noreferrer">Live Demo</a>
        )}
      </div>

      {/* Optional image gallery */}
      {Array.isArray(images) && images.length > 0 && (
        <div className={`pc-gallery ${imgLayout}`}>
          {images.map((src, i) => (
            <img
              key={i}
              src={makeSrc(src)}
              alt={imageAlt || `${title} screenshot ${i + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      )}
    </article>
  );
}
