import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { content, status } = todo;
  const changeHandler = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  const deleteHandler = () => {
    onDelete(todo);
  };

  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={changeHandler}
      />
      <label htmlFor="checkbox">{content}</label>
      <button onClick={deleteHandler}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
