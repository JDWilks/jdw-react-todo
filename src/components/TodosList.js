import Todo from "./Todo";
import UseStore from "../store";
import { useEffect } from "react";

function TodosList() {
  const todos = UseStore((store) => store.todos);
  const fetchTodos = UseStore((store) => store.fetchTodos);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodosList;
