import { motion } from "framer-motion";
import projects from "../data/projects.json";
import Card from "./Card.tsx";

interface SliderProps {
    onProjectSelect: (index: number) => void;
}

export default function Slider({onProjectSelect}: SliderProps) {
    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    return (
        <div className={isTouchDevice ? "overflow-hidden" : ""}>
            {isTouchDevice ? (
                <motion.div
                    className="flex gap-4 flex-row"
                    drag="x"
                    dragConstraints={{ right: 0, left: -((projects.length - 1) * 280) }}
                    dragElastic={0.1}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="flex-shrink-0 cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            onClick={() => onProjectSelect(index)}
                        >
                            <Card {...project} />
                        </motion.div>
                    ))}
                </motion.div>
            ) : (
                <div className="flex gap-4 flex-wrap justify-center flex-row">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 cursor-pointer transform transition-transform duration-300 hover:scale-105"
                            onClick={() => onProjectSelect(index)}
                        >
                            <Card {...project} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}