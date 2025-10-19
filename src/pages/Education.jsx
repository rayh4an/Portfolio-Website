import EducationCard from "../components/EducationCard.jsx";
import { education } from "../data/education.js";

export default function Education() {
    return (
        <section className="page-education">
        <h1>Education</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
            {education.map((e) => (
            <EducationCard key={`${e.school}-${e.degree}-${e.graduation}`} {...e} />
            ))}
        </div>
        </section>
    );
}