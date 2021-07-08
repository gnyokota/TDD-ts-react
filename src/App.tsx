import Dropdown from "./component/Dropdown";

function App() {
  const options = ["Pikachu", "Charizard", "Charmander", "Squirtle"];
  return (
    <div className="App">
      <Dropdown title={"Selecione seu Pokemon"} options={options} />
    </div>
  );
}

export default App;
