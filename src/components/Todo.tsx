import "./Todo.css";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  todo: Todo;
};

const Todo = ({ todo }: Props) => {
  const { id, title, completed } = todo;

  return (
    <div className="todo-wrapper">
      {completed ? (
        <h1 data-testid={`todo-${id}`} className="strike">
          {title}
        </h1>
      ) : (
        <h1 data-testid={`todo-${id}`} className="title">
          {title}
        </h1>
      )}
    </div>
  );
};

export default Todo;
