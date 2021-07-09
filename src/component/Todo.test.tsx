import { render, screen, cleanup } from "@testing-library/react";
import Todo from "./Todo";

const todo = { id: 1, title: "Wash the dishes", completed: false };

describe("todo", () => {
  test("should render todo component", () => {
    render(<Todo todo={todo} />);
    const element = screen.getByTestId("todo-1");
    expect(element).toBeInTheDocument();
  });
});
