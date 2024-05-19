import ProjectReader from "./ProjectReader"
import ProjectCard from "./ProjectCard";

export default function Projects() { 
    const reader = new ProjectReader();
    reader.get();

    return (
        <>
            <p>Projects</p>
            <ProjectCard/>
        </>
        
    )
}
