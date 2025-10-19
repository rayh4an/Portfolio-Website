export default function EducationCard({
    school,
    degree,
    graduation,          // e.g., "Graduated May 2025"
    bullets = [],
    courses = [],        // optional short tags like "DSA", "OS"
    links = {}
    }) {
    const { site } = links || {};

    // helper: bold the label before the first ":" (e.g., "GPA:", "Related Coursework:")
    const renderBullet = (text) => {
        const idx = text.indexOf(":");
        if (idx > 0) {
        const label = text.slice(0, idx).trim();
        const rest = text.slice(idx + 1).trim();
        return (
            <>
            <strong>{label}:</strong>{rest ? " " + rest : null}
            </>
        );
        }
        return text;
    };

    return (
        // Full-width row so it stacks vertically like your other cards
        <article className="card" style={{ gridColumn: "1 / -1", width: "100%" }}>
        {/* Big title (no default margins) */}
        <h3 className="edu-school" style={{ margin: 0 }}>{school}</h3>

        {/* Muted sublines under the title */}
        {degree && (
            <div className="edu-sub muted" style={{ marginTop: ".4rem" }}>
            {degree}
            </div>
        )}
        {graduation && (
            <div className="edu-sub muted" style={{ marginTop: ".25rem" }}>
            {graduation}
            </div>
        )}

        {/* Bullets — same spacing as other tabs, with bolded labels */}
        {bullets.length > 0 && (
            <ul className="proj-bullets" style={{ marginTop: ".35rem" }}>
            {bullets.map((b, i) => (
                <li key={i}>{renderBullet(b)}</li>
            ))}
            </ul>
        )}

        {/* Optional course tags (shares the same tag style) */}
        {courses.length > 0 && (
            <div className="card-tags">
            {courses.map((c) => <span key={c} className="tag">{c}</span>)}
            </div>
        )}

        {/* Actions row — add top margin so the button isn’t tight to the text */}
        <div className="card-actions" style={{ display: "flex", gap: "0.75rem", marginTop: ".75rem" }}>
            {site && (
            <a className="btn" href={site} target="_blank" rel="noreferrer">
                School Site
            </a>
            )}
        </div>
        </article>
    );
}
