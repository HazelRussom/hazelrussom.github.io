import ProjectReader from "./ProjectReader"
import ProjectCard from "./ProjectCard";

export default function Projects() { 
    const reader = new ProjectReader();
    const projects = reader.get();

    if(projects.length > 0){
        console.warn(projects[0].name)
    }
    return (
        <>
            <p>Projects</p>
            { projects.length > 0 && 
            <ProjectCard project={projects[0]}/>
            }
        </>
        
    )
}
