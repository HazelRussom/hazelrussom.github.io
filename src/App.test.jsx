import { render, screen } from "@testing-library/react";
import App from "./App";

vi.mock("./Header", () => () => <span data-testid="header" />);

vi.mock("./LandingPage", () => () => <span data-testid="landing" />);

vi.mock("./Projects/Projects", () => () => <span data-testid="projects" />);

describe("App should", () => {
  it("render a header", () => {
    render(<App />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("render the landing component", () => {
    render(<App />);

    expect(screen.getByTestId("landing")).toBeInTheDocument();
  });

  it("render the past projects component", () => {
    render(<App />);

    expect(screen.getByTestId("projects")).toBeInTheDocument();
  });
});
