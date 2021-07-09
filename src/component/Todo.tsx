import React from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  todo: Todo;
};

const Todo = ({ todo }: Props) => {
  return <div data-testid="todo-1">{todo.title}</div>;
};

export default Todo;
