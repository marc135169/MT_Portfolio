import React from "react";
import Slider from "../components/Slider";

const Projects: React.FC = () => {
    return (
        <section className="py-20 px-5">
            <h2 className="text-3xl font-bold mb-6 text-primary">Mes Projets</h2>
            <Slider />
        </section>
    );
};

export default Projects;
