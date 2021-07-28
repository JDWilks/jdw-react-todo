import UseStore from "../store";

function Todo({ todo }) {
  let status = todo.completed ? "Done" : "To Do";

  const changeCompleted = UseStore((store) => store.changeCompleted);

  function toggleStatus() {
    todo.completed = !todo.completed;
    console.log(todo.completed);
    let updatedTodo = { ...todo, completed: todo.completed };
    changeCompleted(updatedTodo);
    console.log(updatedTodo);
  }

  return (
    <li>
      <h1>{todo.title}</h1>
      <h2>{todo.body}</h2>
      <button onClick={() => toggleStatus()}>{status}</button>
    </li>
  );
}

export default Todo;
