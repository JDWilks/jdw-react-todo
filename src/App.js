import "./App.css";
import Form from "./components/Form";
import TodosList from "./components/TodosList";

function App() {
  return (
    <div className="App">
      <header>
        <Form />
      </header>
      <main>
        <TodosList />
      </main>
    </div>
  );
}

export default App;
