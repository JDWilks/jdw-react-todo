import create from "zustand";

const UseStore = create((set, get) => ({
  todos: [
    {
      title: "do this 1",
      completed: false,
      body: "this is the actual todo",
      id: 1,
    },
    {
      title: "do this 2",
      completed: false,
      body: "this is the actual todo",
      id: 2,
    },
    {
      title: "do this 3",
      completed: true,
      body: "this is the actual todo",
      id: 3,
    },
  ],

  fetchTodos: () => {
    fetch("http://localhost:4000/todos")
      .then((res) => res.json())
      .then((res) => set({ todos: res }))
      .then(console.log("fetch responce", get().todos));
  },

  changeCompleted: (updatedTodo) => {
    let id = updatedTodo.id;
    fetch(`http://localhost:4000/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...updatedTodo }),
    })
      .then(
        set({
          todos: get().todos.map((todo) => {
            if (todo.id === updatedTodo.id) {
              return updatedTodo;
            } else {
              return todo;
            }
          }),
        })
      )
      .then((resp) => resp.json())
      .then((resp) => console.log("patch", resp));
  },
}));

export default UseStore;
