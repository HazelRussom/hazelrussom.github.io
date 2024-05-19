import ProjectReader from "./ProjectReader"
import ProjectCard from "./ProjectCard";

export default function Projects() { 
    const reader = new ProjectReader();
    const projects = reader.get();

    return (
        <>
            <p>Projects</p>
            { projects && 
            <ProjectCard/>
            }
        </>
        
    )
}
