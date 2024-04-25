import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

describe('Projects should', () => {
  it('render a title', () => {
    render(<Projects/>);

    expect(screen.getByText("Projects")).toBeVisible();
  });
});