import { render, screen } from "@testing-library/react";
import Projects from "./Projects";
import ProjectReader from "./ProjectReader";

jest.mock("./ProjectReader")

describe('Projects should', () => {
  beforeEach(() => {
    ProjectReader.prototype.get = jest.fn();
  });

  it('render a title', () => {
    render(<Projects/>);

    expect(screen.getByText("Projects")).toBeVisible();
  });

  it('get all projects', () => {
    let getProjects = jest.fn();
    
    render(<Projects/>);
    ProjectReader.prototype.get = getProjects;

    expect(getProjects).toBeCalledTimes(1);
  });
});