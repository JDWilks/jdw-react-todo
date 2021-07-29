import UseStore from "../store";

function Todo({ todo }) {
  let status = todo.completed ? "Done " : "To Do ";
  const deleteTodo = UseStore((store) => store.deleteTodo);

  const changeCompleted = UseStore((store) => store.changeCompleted);

  function toggleStatus() {
    todo.completed = !todo.completed;
    console.log(todo.completed);
    let updatedTodo = { ...todo, completed: todo.completed };
    changeCompleted(updatedTodo);
    console.log(updatedTodo);
  }

  function strikeThrough() {
    return todo.completed ? "strikeThrough" : null;
  }

  return (
    <li>
      <h1 className={strikeThrough()}>{todo.title}</h1>
      <h2 className={strikeThrough()}>{todo.body}</h2>
      <button onClick={() => toggleStatus()}>{status}✅</button>
      <button onClick={() => deleteTodo(todo)}>❌</button>
    </li>
  );
}

export default Todo;

// just changing so i can save
