import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
    <form onSubmit={onAddHandler}>
      <input
        type="text"
        value={content}
        placeholder="Add Todo"
        onChange={onChangeHandler}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};
export default AddToDo;
