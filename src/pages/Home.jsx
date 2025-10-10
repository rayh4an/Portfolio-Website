export default function Home() {
    return (
    <section>
        <h1 style={{ marginBottom: ".5rem" }}>
        Hello, I’m <span style={{ color: "#38bdf8" }}>Rayhaan</span>.
        </h1>
        <p style={{ maxWidth: 720, opacity: 0.9 }}>
        Welcome to my personal website and portfolio. I was a computer science student at Georiga State University who graduated summer 2025.
        This website showcases several projects I have completed. It also contains information on my work experience within the industry. 
        I love software engineering & developement and I possess the required skills in order to thrive within this industry.
        I am highly proficient across specialty of full-stack developement, and I believe that I would be a valuable asset within this industry. 
        </p>
        <section className="card" style={{ maxWidth: 900 }}>
            <h2 style={{ marginTop: 0 }}>Education</h2>
            <p style={{ opacity: 0.9 }}>
            <strong>Georgia State University, B.S. in Computer Science</strong>
            <ul></ul>
            <strong>Graduated May 2025</strong>
            </p>
            <ul style={{ margin: "0.5rem 0 0 1.2rem" }}>
            <li><strong>GPA: </strong>3.80/4.00, President’s List & Dean’s List</li>
            <li><strong>Related Coursework: </strong>Data Structures, Software Engineering & Development, Machine Learning, Design & Analysis
            of Algorithms, Operating Systems, Computer Organization & Programming, Mobile App Development, Web
            Programming, System-Level Programming, Probability & Statistics for Computer Science</li>
            </ul>
        </section>
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
        <a className="btn" href="https://www.linkedin.com/in/rayh4an/" target="_blank" rel="noreferrer">
        LinkedIn
        </a>
        <a className="btn" href="https://github.com/rayh4an" target="_blank" rel="noreferrer">
        GitHub
        </a>
        <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">
        Resume
        </a>
    </div>
    </section>
    );
}
