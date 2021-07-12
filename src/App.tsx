import Form from "./components/Form";

function App() {
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
