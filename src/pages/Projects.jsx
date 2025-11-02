import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
    return (
    <section>
    <h1>Projects</h1>
    <div className="stack" style={{ marginTop: "1rem" }}>
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
    </div>
    </section>
    );
}
