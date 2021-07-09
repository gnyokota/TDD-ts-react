import Dropdown from "./component/Dropdown";
import Todo from "./component/Todo";

function App() {
  const options = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"];
  const todos = [
    { id: 1, title: "Wash the dishes", completed: false },
    { id: 2, title: "Clean the kitchen", completed: true },
  ];

  return (
    <div className="App">
      <Dropdown title={"Select your pokemon"} options={options} />
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;
