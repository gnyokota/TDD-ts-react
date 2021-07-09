import Todo from "./components/Todo";

const todos = [
  { id: 1, title: "Wash the dishes", completed: false },
  { id: 2, title: "Clean the kitchen", completed: true },
];

function App() {
  return (
    <div className="App">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;
