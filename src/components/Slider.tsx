import React, { useRef } from "react";
import { motion } from "framer-motion";

import projects from "../data/projects.json";
import Card from "./Card.tsx";

const Slider: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    return (
        <div className="overflow-hidden relative">
            <motion.div
                ref={carouselRef}
                className="flex gap-4"
                drag="x"
                dragConstraints={{ right: 0, left: -((projects.length - 1) * 160) }}
            >
                {projects.map((project, index) => (
                    <motion.div key={index} className="cursor-grab">
                        <Card {...project} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Slider;
