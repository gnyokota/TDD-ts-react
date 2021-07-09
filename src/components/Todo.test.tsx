import { render, screen, cleanup } from "@testing-library/react";
import Todo from "./Todo";

describe("todo component", () => {
  afterEach(() => {
    cleanup();
  });

  test("render the component", () => {
    const todo = { id: 1, title: "Wash the dishes", completed: false };
    render(<Todo todo={todo} />);

    const todoElement = screen.getByTestId("todo-1");
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent(todo.title);
  });

  test("should render a completed todo", () => {
    const todo = { id: 2, title: "Dry the dishes", completed: true };
    render(<Todo todo={todo} />);

    const todoElement = screen.getByTestId("todo-2");
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent(todo.title);
    expect(todoElement.className).toBe("strike");
  });
});
