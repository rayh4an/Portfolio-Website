export default function ProjectCard({
    title,
    desc,
    bullets = [],
    tech = [],
    links = {},
    images = [],
    image,
    imageAlt = ""
    }) {
    const { demo, code } = links;

    // Build the gallery (works locally + on GitHub Pages)
    const base = import.meta.env.BASE_URL;
    const gallery =
        images && images.length > 0
        ? images.map((p) => base + p)
        : image
        ? [base + image]
        : [];

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
            <div
            style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                margin: ".75rem 0",
            }}
            >
            {tech.map((t) => (
                <span key={t} className="tag">
                {t}
                </span>
            ))}
            </div>
        )}

        <div style={{ display: "flex", gap: "0.75rem" }}>
            {code && (
            <a className="btn" href={code} target="_blank" rel="noreferrer">
                Project Repository
            </a>
            )}
            {demo && (
            <a className="btn" href={demo} target="_blank" rel="noreferrer">
                Live Demo
            </a>
            )}
        </div>

        {/* BOTTOM: screenshots gallery */}
        {gallery.length > 0 && (
            <div
            style={{
                display: "flex",
                gap: "2.5rem",
                flexWrap: "wrap",
                alignItems: "flex-start",
                marginTop: "1rem",
            }}
            >
            {gallery.map((src, i) => (
                <a key={i} href={src} target="_blank" rel="noreferrer" style={{ lineHeight: 0 }}>
                <img
                    src={src}
                    alt={imageAlt || `${title} screenshot ${i + 1}`}
                    style={{
                    display: "block",
                    width: "220px",      // tweak between 200–260px if you like
                    height: "auto",
                    borderRadius: "12px",
                    border: "1px solid var(--line)",
                    boxShadow: "0 6px 24px rgba(0,0,0,.25)",
                    background: "#0b1220",
                    }}
                />
                </a>
            ))}
            </div>
        )}
        </article>
    );
}
