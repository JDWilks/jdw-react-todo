import UseStore from "../store";
import { useState } from "react";

function Form() {
  const addNewTodo = UseStore((store) => store.addNewTodo);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newTodo = {
      title: event.target.todoTitle.value,
      body: event.target.actualTodo.value,
      completed: false,
    };
    addNewTodo(newTodo);
    setTitle("");
    setBody("");
    event.target.reset();
  }

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleChangeBody(event) {
    setBody(event.target.value);
  }

  // event = pressing key (hitting enter - handle submit)
  // target = is the bit of html on the page you are interacting with
  // value = is whats being typed in

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoTitle">
        <h1>TODO TITLE</h1>
      </label>

      <input
        type="text"
        id="todoTitle"
        name="todoTitle"
        size="50"
        onChange={handleChange}
        value={title}
      ></input>

      <label htmlFor="actualTodo">
        <h1>WRITE YOUR TODO HERE</h1>
      </label>

      <input
        type="text"
        id="actualTodo"
        name="actualTodo"
        onChange={handleChangeBody}
        value={body}
        size="50"
      ></input>

      <button
        onClick={() => {
          console.log(
            "you clicked me - now add this to state so it appears below"
          );
        }}
      >
        Press to add to list
      </button>
    </form>
  );
}

export default Form;
