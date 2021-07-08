import Dropdown from "./component/Dropdown";

function App() {
  const options = ["Pikachu", "Charizard", "Charmander", "Squirtle"];
  return (
    <div className="App">
      <Dropdown title={"Select your pokemon"} options={options} />
    </div>
  );
}

export default App;
