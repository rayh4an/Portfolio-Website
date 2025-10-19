export default function ExperienceCard({
    company,
    title,
    period,
    location,
    bullets = [],
    tech = [],
    links = {}
    }) {
    const { companySite } = links || {};

    return (
        // Make each card span full row even inside a grid (so it stacks top→bottom)
        <article className="card" style={{ gridColumn: "1 / -1", width: "100%" }}>
        <h3 style={{ margin: 0 }}>
            {title} — {company}
        </h3>

        {(period || location) && (
            <div style={{ opacity: 0.8, margin: ".25rem 0 .5rem" }}>
            {[period, location].filter(Boolean).join(" • ")}
            </div>
        )}

        {bullets.length > 0 && (
            <ul className="proj-bullets">
            {bullets.map((b, i) => (
                <li key={i}>{b}</li>
            ))}
            </ul>
        )}

        {/* Tags: identical spacing to Projects */}
        {tech.length > 0 && (
            <div
            className="card-tags"
            style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", margin: ".75rem 0" }}
            >
            {tech.map((t) => (
                <span key={t} className="tag">{t}</span>
            ))}
            </div>
        )}

        {/* Actions: same flex + gap as Projects */}
        <div className="card-actions" style={{ display: "flex", gap: "0.75rem" }}>
            {companySite && (
            <a className="btn" href={companySite} target="_blank" rel="noreferrer">
                Company Site
            </a>
            )}
        </div>
        </article>
    );
}
