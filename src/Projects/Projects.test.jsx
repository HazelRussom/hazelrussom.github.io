import { render, screen } from "@testing-library/react";
import Project from "./Project";
import Projects from "./Projects";
import ProjectReader from "./ProjectReader";

vi.mock("./ProjectReader")

vi.mock("./ProjectCard", (project) => {
  return { 
    default: vi.fn().mockImplementation(() => {
      () => <span data-testid="project">{project.name}</span>;
    }),
  };
});

describe('Projects should', () => {
  beforeEach(() => {
    ProjectReader.prototype.get = vi.fn().mockImplementation(() => { 
      return []
    })
  });

  it('render a title', () => {
    render(<Projects/>);

    expect(screen.getByText("Projects")).toBeVisible();
  });

  it('get all projects', () => {
    let getProjects = vi.fn();
    ProjectReader.prototype.get = getProjects;
    
    getProjects.mockImplementation(() => { 
      return []
    })
    
    render(<Projects/>);

    expect(getProjects).toBeCalledTimes(1);
  });

  it('render no projects', () => {    
    render(<Projects/>);

    expect(screen.queryByTestId("project")).not.toBeInTheDocument();
  });

  it.skip('render one project', () => {
    let getProjects = vi.fn();
    const projects = [
      new Project("Test")
    ];

    getProjects.mockImplementation(() => { 
      return projects;
  })

    ProjectReader.prototype.get = getProjects;
    
    render(<Projects/>);

    expect(screen.getByTestId("project")).toBeVisible();
  });
});