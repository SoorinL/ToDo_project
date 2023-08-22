import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { content, status } = todo;
  const changeHandler = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  const deleteHandler = () => {
    onDelete(8);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={changeHandler}
      />
      <label htmlFor="checkbox" className={styles.text}>
        {content}
      </label>
      <span className={styles.icon}>
        <button onClick={deleteHandler} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
