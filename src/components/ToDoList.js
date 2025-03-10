import { useState } from "react";

function ToDoList({ toDos, setToDos }) {
  const [toDo, setToDo] = useState("");
  const handleInput = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  return (
    <section>
      <h1>My To-Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={handleInput}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>{toDo}</li>
        ))}
      </ul>
    </section>
  );
}

export default ToDoList;
