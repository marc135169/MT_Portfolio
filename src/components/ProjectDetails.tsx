import {ProjectInterface} from "../interfaces/ProjectTypes.ts"

export default function ProjectDetails({ title, date, description, technologies, image, details, newSkills, goal, movie, github, hosting }: ProjectInterface){

 return (
        <div className="bg-secondary py-4  flex flex-col gap-8 items-center justify-center l:mx-[8%] xl:mx-[15%]">
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-md
                                                   l:h-80" />
            <div className="flex flex-col w-full items-center">
                <h2 className="text-xl font-bold text-primary mt-2">{title}</h2>
                <p className="text-quinary">{date}</p>
            </div>

            <div className="flex flex-col w-full items-center">
                <h3 className="text-quinary underline">Mission</h3>
                <p className="text-quinary mt-2 text-justify">{description}</p>
            </div>
            <div className="flex flex-col w-full items-center">
                <h3 className="text-quinary underline">Technologies principales</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span key={index}
                              className="bg-primary text-quinary shadow-[0_2px_1px_2px_rgba(0,0,0,0.2)] px-2 py-1 text-sm rounded-md">
                {tech}
              </span>
                    ))}
                </div>
            </div>
            <div className="flex flex-col w-full items-center">
                <h3 className="text-quinary underline mb-3">Détails de la mission</h3>
                <div className="text-quinary text-justify">{details}</div>
            </div>
            <video src={movie} autoPlay muted loop></video>
            <div className="flex flex-col w-full items-center">
                <h3 className="text-quinary underline">Compétences travaillées où aquises</h3>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {newSkills.map((skill, index) => (
                        <span key={index}
                              className="bg-quinary text-primary shadow-[0_2px_1px_2px_rgba(0,0,0,0.2)] font-bold px-2 py-1 text-sm rounded-md">
                {skill}
              </span>
                    ))}
                </div>
            </div>
            <div className="flex flex-col w-full items-center">
                <h3 className="text-quinary underline mb-3">But de la mission</h3>
                <div className="text-quinary text-justify">{goal}</div>
            </div>
            <div className="flex flex-col w-full items-center bg-primary rounded-md py-3">
                <h3 className="text-secondary underline mb-3">Liens utiles</h3>
                <div className="text-secondary flex flex-row gap-2">
                    <i className="icon fab fa-github text-xl"></i>
                    <a href={github} className="text-secondary">Github</a>
                </div>
                <div className="text-secondary flex flex-row gap-2">
                    <i className={`icon fa-solid ${title === "Circle Tower Defense" ? "fa-map" : "fa-server"} text-xl`}></i>
                    <a href={hosting} className="text-secondary">{title === "Circle Tower Defense" ? "Mind Map" : "Hébergement"}</a>
                </div>
            </div>

        </div>
    );
};