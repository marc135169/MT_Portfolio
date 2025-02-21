import {useRef} from "react";
/*import { motion } from "framer-motion";*/
import projects from "../data/projects.json";
import Card from "./Card.tsx";

interface SliderProps {
    onProjectSelect: (index: number) => void;
}

export default function Slider({onProjectSelect}: SliderProps){
    const carouselRef = useRef<HTMLDivElement>(null);

    return (
        <div className="overflow-hidden">
            <div
                ref={carouselRef}
                className="flex gap-4"
                /*drag="x"*/
                /*dragConstraints={{ right: 0, left: -((projects.length - 1) * 160) }}*/
            >
                {projects.map((project, index) => (
                    <div key={index}
                                className="cursor-grab"
                                onClick={() => onProjectSelect(index)}>
                        <Card {...project} />
                    </div>
                ))}
            </div>
        </div>
    );
};
