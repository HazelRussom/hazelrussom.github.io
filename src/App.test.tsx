import { render, screen } from "@testing-library/react";
import App from "./App";

vi.mock("./Header", () => {
  return {
    default: vi.fn().mockImplementation(() => {
      return <span data-testid="header" />;
    }),
  };
});

vi.mock("./LandingPage", () => {
  return {
    default: vi.fn().mockImplementation(() => {
      return <span data-testid="landing" />;
    }),
  };
});

vi.mock("./Projects/Projects", () => {
  return {
    default: vi.fn().mockImplementation(() => {
      return <span data-testid="projects" />;
    }),
  };
});

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
