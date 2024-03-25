import { render, screen } from "@testing-library/react";
import App from './App';

jest.mock("./Header", () => () => <span data-testid="header"/>);

describe("App should", () => {
    it("render a header", () => {
        render(<App/>);

        expect(screen.getByTestId("header")).toBeInTheDocument();
    })
});