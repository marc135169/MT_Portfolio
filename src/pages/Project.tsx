import Slider from "../components/Slider";
import projects from "../data/projects.json";
import ProjectDetails from "../components/ProjectDetails.tsx";
import {useState} from "react";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(0);

    const handleProjectSelect = (index: number) => {
        const element = document.getElementById("projectSelected")
        setSelectedProject(index);
        if (element)
            element.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <>
            <section className="carousel pt-20 px-5">
                <h1 className="text-3xl font-bold mb-6 text-primary text-center">Mes Projets</h1>
                <Slider onProjectSelect={handleProjectSelect}/>
            </section>
            <section
                id="projectSelected"
                className="projectDetails pt-8 px-5"
            >
                <ProjectDetails {...projects[selectedProject]} />
            </section>
        </>
    );
};