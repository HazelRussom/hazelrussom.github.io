import { render, screen } from "@testing-library/react";
import App from './App';

jest.mock("./Header", () => () => <span data-testid="header"/>);

jest.mock("./LandingPage", () => () => <span data-testid="landing"/>);

jest.mock("./Projects/Projects", () => () => <span data-testid="projects"/>);

describe("App should", () => {
    it("render a header", () => {
        render(<App/>);

        expect(screen.getByTestId("header")).toBeInTheDocument();
    });

    it("render the landing component", () => {
        render(<App/>);

        expect(screen.getByTestId("landing")).toBeInTheDocument();
    });

    it("render the past projects component", () => {
        render(<App/>);

        expect(screen.getByTestId("projects")).toBeInTheDocument();
    })
});