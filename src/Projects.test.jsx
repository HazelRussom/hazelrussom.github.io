import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

describe('Projects should', () => {
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