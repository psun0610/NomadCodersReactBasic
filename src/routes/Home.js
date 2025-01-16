import ToDoList from "../components/ToDoList";
import CoinTracker from "../components/CoinTracker";
import MovieApp from "../components/MovieApp";
import { useState } from "react";

function Home() {
  const [toDos, setToDos] = useState([]);
  const [select, setSelect] = useState("toDoList");
  const options = [
    { id: "toDoList", label: "TO DO LIST" },
    { id: "coinTracker", label: "Coin Tracker" },
    { id: "movieApp", label: "Movie App" },
  ];

  return (
    <div>
      <h1>SELECT YOU WANT</h1>
      <div>
        {options.map((option) => (
          <div key={option.id}>
            <input
              name="select"
              id={option.id}
              type="radio"
              onChange={() => setSelect(option.id)}
              checked={select === option.id}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
        <hr />
        {select === "toDoList" && (
          <ToDoList toDos={toDos} setToDos={setToDos} />
        )}
        {select === "coinTracker" && <CoinTracker />}
        {select === "movieApp" && <MovieApp />}
      </div>
    </div>
  );
}

export default Home;
