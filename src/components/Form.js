function Form() {
  return (
    <ul>
      <li>
        <label htmlFor="todoTitle">
          <h1>TODO TITLE</h1>
        </label>
      </li>
      <li>
        <input type="text" id="todoTitle" name="todoTitle" size="50"></input>
      </li>
      <li>
        <label htmlFor="actualTodo">
          <h1>WRITE YOUR TODO HERE</h1>
        </label>
      </li>
      <li>
        <input type="text" id="actualTodo" name="actualTodo" size="50"></input>
      </li>
      <li>
        <button
          onClick={() => {
            console.log(
              "you clicked me - now add this to state so it appears below"
            );
          }}
        >
          Press to add to list
        </button>
      </li>
    </ul>
  );
}

export default Form;
