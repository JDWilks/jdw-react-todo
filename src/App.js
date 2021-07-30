import "./App.css";
import Form from "./components/Form";
import TodosList from "./components/TodosList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Test from "./Pages/Test";


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact>
          <Form />
        </Route>
        <Route path="/" exact>
          <TodosList />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
      </div>
    </Router>
  );
}

export default App;
