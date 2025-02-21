import {ProjectInterface} from "../interfaces/ProjectTypes.ts"

export default function Card({ title, date, description, technologies, image} : ProjectInterface) {

    return (
        <div className="bg-primary shadow-lg rounded-xl p-4 w-60 min-h-[26rem]">
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-xl font-bold text-secondary mt-2">{title}</h3>
            <p className="text-quinary text-sm">{date}</p>
            <p className="text-quinary mt-2">{description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span key={index} className="bg-quinary px-2 py-1 text-sm rounded-md">
            {tech}
          </span>
                ))}
            </div>
        </div>
    );
};


