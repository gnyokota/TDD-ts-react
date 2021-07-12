import Form from "./components/Form";

function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(event);
  };

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
