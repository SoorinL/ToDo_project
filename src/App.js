import { useState } from "react";
import AddToDo from "./components/AddToDo/AddToDo";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const addToDoHandler = (toDo) => {
    console.log("app:: ", toDo);
    setToDoList((prev) => {
      return [...prev, toDo];
    });
  };

  return (
    <div>
      <header>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </header>
      <ToDoList data={toDoList}></ToDoList>
      <AddToDo onAddToDo={addToDoHandler}></AddToDo>
    </div>
  );
}

export default App;
