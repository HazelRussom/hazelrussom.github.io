import ProjectReader from "./ProjectReader"

export default function Projects() { 
    const reader = new ProjectReader();
    reader.get();

    return (
        <p>Projects</p>
    )
}
