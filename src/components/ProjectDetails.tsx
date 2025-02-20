import {ProjectInterface} from "../interfaces/ProjectTypes.ts"

export default function ProjectDetails({ title, date, description, technologies, image, details, newSkills, goal, movie }: ProjectInterface){
    return (
        <div className="bg-secondary py-4 w-full flex flex-col gap-4 items-center">
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-xl font-bold text-primary mt-2">{title}</h3>
            <p className="text-quinary =">{date}</p>
            <p className="text-quinary mt-2 text-justify">{description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span key={index}
                          className="bg-primary text-quinary shadow-[0_2px_1px_2px_rgba(0,0,0,0.2)] px-2 py-1 text-sm rounded-md">
            {tech}
          </span>
                ))}
            </div>
            <div className="text-quinary text-justify">{details}</div>
            <video src="" autoPlay muted>{movie}</video>
            <div className="mt-3 flex flex-wrap gap-2 justify-center">
                {newSkills.map((skill, index) => (
                    <span key={index}
                          className="bg-quinary text-primary shadow-[0_2px_1px_2px_rgba(0,0,0,0.2)] font-bold px-2 py-1 text-sm rounded-md">
            {skill}
          </span>
                ))}
            </div>
            <div className="text-quinary text-justify">{goal}</div>

        </div>
    );
};


