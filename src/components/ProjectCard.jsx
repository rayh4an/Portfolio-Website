export default function ProjectCard({ title, desc, bullets = [], tech = [], links = {} }) {
    const { demo, code } = links;
    return (
    <article className="card" style={{ gridColumn: "1 / -1", width: "100%" }}>
        <h3 style={{ margin: 0 }}>{title}</h3>
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

        <div style={{ display: "flex", gap: "0.75rem" }}>
            {code && (
            <a className="btn" href={code} target="_blank" rel="noreferrer">
                Project Repository
            </a>
            )}
        </div>
        </article>
    );
}
