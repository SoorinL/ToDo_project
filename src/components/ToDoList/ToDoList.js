import { useState } from "react";
import AddToDo from "../AddToDo/AddToDo";
import Todo from "../Todo/Todo";

const ToDoList = ({ filter }) => {
  const [toDos, setToDos] = useState([]);

  const addToDoHandler = (toDo) => {
    // 새로운 투두를 todos에 업데이트 해야 함
    setToDos([...toDos, toDo]);
  };

  const updateHandler = (updated) =>
    setToDos(toDos.map((t) => (t.id === updated.id ? updated : t)));

  const deleteHandler = (deleted) =>
    setToDos(toDos.filter((t) => t.id !== deleted.id));

  const filtered = getFilteredItems(toDos, filter);

  return (
    <section>
      <ul>
        {filtered.map((toDo) => (
          <Todo
            key={toDo.id}
            todo={toDo}
            onUpdate={updateHandler}
            onDelete={deleteHandler}
          />
        ))}
      </ul>
      <AddToDo onAddToDo={addToDoHandler} />
    </section>
  );
};

export default ToDoList;

function getFilteredItems(toDos, filter) {
  if (filter === "all") {
    return toDos;
  }
  return toDos.filter((todo) => todo.status === filter);
}
