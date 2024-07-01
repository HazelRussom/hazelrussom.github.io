import ProjectReader from "./ProjectReader"
import ProjectCard from "./ProjectCard";

export default function Projects() { 
    const reader = new ProjectReader();
    const projects = reader.get();
   
    const projectCards = projects.map((project, i) => <ProjectCard key={i} project={project}/>)

    return (
        <>
            <p>Projects</p>
            {projectCards}
        </>
        
    )
}
