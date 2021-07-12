import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("render form component", () => {
  it("renders without crashing", () => {
    render(<Form />);
    expect(screen.getByText(/Form validation/i)).toBeInTheDocument();
    expect(screen.getByText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByText(/Password:/i)).toBeInTheDocument();
  });
});
