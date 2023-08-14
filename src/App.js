import AddToDo from "./components/AddToDo/AddToDo";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  return (
    <div>
      <header>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </header>
      <ToDoList></ToDoList>
      <AddToDo></AddToDo>
    </div>
  );
}

export default App;
