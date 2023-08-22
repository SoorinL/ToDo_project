import ToDoList from "./components/ToDoList/ToDoList";
import Header from "./components/Header/Header";
import { useState } from "react";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <ToDoList filter={filter} />
    </>
  );
}

export default App;
