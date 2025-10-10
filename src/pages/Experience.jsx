import ExperienceCard from "../components/ExperienceCard.jsx";
import { experience } from "../data/experience.js";

export default function Experience() {
    return (
        <section>
        <h1>Experience</h1>
        <div className="grid" style={{ marginTop: "1rem" }}>
            {experience.map((e) => (
            <ExperienceCard
                key={`${e.company ?? e.title ?? Math.random()}`}
                {...e}
            />
            ))}
        </div>
        </section>
    );
}
