import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddToDo.module.css";

const AddToDo = (props) => {
  const [content, setContent] = useState("");

  const onChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const onAddHandler = (event) => {
    event.preventDefault();
    if (content.trim().length === 0) {
      return;
    }
    props.onAddToDo({
      id: uuidv4(),
      content,
      status: "active",
    });
    setContent("");
  };
  return (
    <form className={styles.form} onSubmit={onAddHandler}>
      <input
        className={styles.input}
        type="text"
        value={content}
        placeholder="Add Todo"
        onChange={onChangeHandler}
      ></input>
      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  );
};
export default AddToDo;
